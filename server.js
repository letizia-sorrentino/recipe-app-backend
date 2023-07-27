//boilerplate to bring express in
const express = require("express");
const asyncMySQL = require("./mysql/connection");
const app = express(); //create an instance of express
//const {checkToken} = require("./middleware")

//middelware function
app.use((req, res, next) => {
    console.log("new request");
    next();
});

//convert the body to json
app.use(express.json());

//routes
//app.use("favouriterecipes", checkToken, require("./routes/"))
app.use("/account", require("./routes/account"));

//boilerplate to start the server
const port = process.env.PORT || 6001;
app.listen(port, () => {
    console.log(`the server is running on ${port}`);
});
