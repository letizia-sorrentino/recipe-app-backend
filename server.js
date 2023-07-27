//boilerplate to bring express in
const express = require("express");
const app = express(); //create an instance of express

 

//boilerplate to start the server
const port = process.env.PORT || 6001;
app.listen(port, () => {
    console.log(`the server is running on ${port}`);
});
