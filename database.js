var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "realtime",
    port: 3307
});

var connect = function () {
    connection.connect(function (err) {
        if (!err) {
            console.log("Database is connection");
        } else {
            console.log("Database connect error");
        }
    })
}

var closeDB = function () {
    connection.end(function (err) {
        if (!err) console.log("Connection db closed");
    });
}

exports.getAllUser = function (callbackQuery) {
    connect();
    connection.query("select * from mesage", function (err, result,fields) {
        if (!err) {
            callbackQuery(result);
        } else {
            console.log(err);
        }
    })
}