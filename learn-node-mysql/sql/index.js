const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tmdgus123!',
    database: 'base_sql'
});

module.exports = db;