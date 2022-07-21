//js

const express = require('express');
const app = express();
const mysql = require('mysql2');

const connection = require('./config/mysql.config.js');

app.set('view engine', 'ejs');                  // this is code you must put in word for word so that the server knows what view engine you have

//establishing connection to mysql database
connection.connect(function(err) {
    if (err) throw err;
    console.log('Successfully connected to the database');
});

//Routes
app.use('/', require('./routes/login'));

const PORT = process.env.PORT || 2323;

app.listen(PORT, console.log("Server has started at port " + PORT));

