const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");
const { addUser } = require("../mysql/queries");

router.post("/", async (req, res) => {

    const { username, email, password } = req.body;

    //store the user info in the database
    try {
        const result = await asyncMySQL(addUser(username, email, password));
        res.send({ status: 1, userId: result.insertId });
    } catch (error) {
        res.send({ status: 0 });
    }

})

module.exports = router;