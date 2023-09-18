const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");
const { addUser, checkUserCreds, addToken, deleteAllRecipes, deleteUser, deleteToken, deleteUserTokens } = require("../mysql/queries");
const checkToken = require("../middleware/auth");
const { genRandomString } = require("../utils/math");
const sha256 = require("sha256");
const chalk = require("chalk");

//Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    //console.log(chalk.blue(("login")));

    //hash the password
    const sha256Password = sha256(password + "thisappisgreat");

    //to see what is going on 
    console.log(chalk.red("BODY:" + JSON.stringify(req.body)));
    console.log(chalk.blue("‹EMAIL:" + req.body.email));
    console.log(chalk.green("PASSWORD:" + req.body.password));
    console.log(chalk.white("QUERY:" + checkUserCreds(email, sha256Password)));

    //defensive checks against SQL injections
    if (email.includes("%")) {
        res.send("hacker identified");
        return;
    };

    if (email.toLowerCase().includes("not like")) {
        res.send("hacker identified");
        return;
    };

    if (email.length > 20) {
        res.send("hacker identified");
        return;
    }

    //compare the hashed version to the store one
    try {
        const results = await asyncMySQL(checkUserCreds(), [email, sha256Password]); // prepared statement

        //console.log(results);
        console.log(chalk.grey("RESULTS:" + JSON.stringify(results)));

        if (results.length === 1) {
            const token = genRandomString(128);
            asyncMySQL(addToken(results[0].id, token));
            res.send({ status: 1, token });
        } else {
            res.send({ status: 0, reason: "wrong credentials" })
        }
    } catch (error) {
        console.log(error);
    };

});

//Logout
router.delete("/logout", checkToken, async (req, res) => {
    console.log("token", req.headers.token);
    try {
        const result = await asyncMySQL(deleteToken(req.headers.token));
        console.log(result);
        console.log(deleteToken(req.headers.token));
        res.send({ status: 1, reason: "logout successful" });
    } catch (error) {
        console.log(error);
    }
});


//Create Account
router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    console.log(chalk.blue("register"));

    //store the user info in the database
    try {
        //hash the password
        const sha256Password = sha256(password + "thisappisgreat");
        const results = await asyncMySQL(addUser(email, sha256Password));
        console.log(results);
        res.send({ status: 1, userId: results.insertId });
    } catch (error) {
        res.send({ status: 0 });
    }

});

//Delete Account
router.delete("/", checkToken, async (req, res) => {

    console.log(req.validatedUserId);
    try {

        await asyncMySQL(deleteAllRecipes(req.validatedUserId));
        await asyncMySQL(deleteUser(req.validatedUserId));
        await asyncMySQL(deleteUserTokens(req.validatedUserId));

        res.send({ status: 1, reason: "account deleted" });


    } catch (error) {

        console.log(error);
    }


});




module.exports = router;