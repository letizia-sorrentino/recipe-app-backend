const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");
const { addUser, checkUserCreds, addToken, deleteAllRecipes, deleteUser, deleteUserTokens } = require("../mysql/queries");
const checkToken = require("../middleware/auth");
const { genRandomString } = require("../utils/math");
const sha256 = require("sha256");

//Login
router.post("/login", async (req, res) => {
    const { username, email, password } = req.body;
    console.log("login")
    //hash the password
    const sha256Password = sha256(password + "thisappisgreat");

    //compared the hashed version to the store one
    try {
        const results = await asyncMySQL(checkUserCreds(username, email, sha256Password));
        console.log(results);
        if (results.length > 0) {
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

//Create Account
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    console.log("register");

    //store the user info in the database
    try {
        //hash the password
        const sha256Password = sha256(password + "thisappisgreat");
        const results = await asyncMySQL(addUser(username, email, sha256Password));
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