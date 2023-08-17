//boilerplate to bring express in
const express = require("express");
const app = express(); //create an instance of express
const cors = require("cors");
const checkToken = require("./middleware/auth");
//const limiter = require("./middleware/limiter");

//app.use(limiter);

// //Enabling CORS
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//     next();
// });

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
