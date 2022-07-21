const mysql = require('mysql2');


var connection = mysql.createConnection({
    host: 'localhost',                            //default host
    user: 'root',                                   //default user
    password: 'root',
    database: 'quickscore_dev'
});



module.exports = connection;