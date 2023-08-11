const mysql = require("mysql");

const connection = mysql.createConnection({

    user: "letizias_love_food",
    password: "Jaya2015!",
    host: "91.238.160.173",
    port: 3306,
    database: "letizias_love_food",

    // user: "root",
    // password: "",
    // host: "localhost",
    // // port: 3306,
    // database: "loveFood",

});

function asyncMySQL(query) {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
    })
}
module.exports = asyncMySQL;