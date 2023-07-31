//boilerplate to bring express in
const express = require("express");
const app = express(); //create an instance of express
const cors = require("cors");
const checkToken = require("./middleware/auth");
const limiter = require("./middleware/limiter");

app.use(limiter);

app.use(cors());

//middelware function
app.use((req, res, next) => {
    console.log("new request");
    next();
});

//convert the body to json
app.use(express.json());

//routes
app.use("/favourites", checkToken, require("./routes/favourites"));
app.use("/account", require("./routes/account"));

//boilerplate to start the server
const port = process.env.PORT || 6001;
app.listen(port, () => {
    console.log(`the server is running on ${port}`);
});
