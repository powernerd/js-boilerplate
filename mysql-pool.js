// Use the file named '.env' to define database credentials.
// Dont forget to create a '.env' file!
require('dotenv').config()
const mysql = require('mysql');

//Set up a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10, //Default
  host: process.env.MYSQL_HOST_NAME,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  connectTimeout: 10000, // Default
  acquireTimeout: 10000 // Default
});
console.log('Created pool.');

pool.getConnection(function (err, connection) {
  if (err) {
    console.log('pool.getConnection '+err);
    return;
  }
  console.log('Starting query...');

  connection.query(`SELECT SLEEP(${testDuration})`, function (err, rows, fields) {
    connection.release();
    let strRows = JSON.stringify(rows);
    console.log('Query returned: '+strRows);
    pool.end(function (err) {
      if (err) {
        console.log('pool.end '+err);
        return;
      }
      console.log('Ended pool.');
    });
  })
});
