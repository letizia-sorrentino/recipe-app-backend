const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");
const { addUser, checkUserCreds } = require("../mysql/queries");
const sha256 = require("sha256");


//Login
router.post("/login"), async (req, res) => {
    const { username, email, password } = req.body;

    //hash the password
    const sha256Password = sha256(password);

    //compared the hashed version to the store one
    try {
        const results = await asyncMySQL(checkUserCreds(username, email, sha256Password));
        //console.log(results);
        if (results.length > 0) {
            res.send({ status: 1 })
        } else {
            res.send({ status: 0, reason: "wrong credentials" })
        }
    } catch (error) {
        console.log(error);
    }

    //tell the user all is ok




};











//Create Account
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    //store the user info in the database
    try {
        //hash the password
        const sha256Password = sha256(password);

        const result = await asyncMySQL(addUser(username, email, sha256Password));
        res.send({ status: 1, userId: result.insertId });
    } catch (error) {
        res.send({ status: 0 });
    }

})

module.exports = router;