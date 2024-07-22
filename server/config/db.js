const mysql = require('mysql');
 
const db = mysql.createPool({
    host : 'localhost',
    user : 'test',
    password : '1111',
    database : 'attendance'
});
 
module.exports = db;