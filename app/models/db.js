const mysql = require("mysql2");
require('dotenv').config()
// const dbConfig = require("../config/db.config");

// const connection = mysql.createConnection({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB

// });

const connection = mysql.createConnection(process.env.DATABASE_URL)

connection.connect((error)=>{
  if(error) console.log("MYSQL connection: " + error);
  else console.log("Successfully connected to the database");

});
module.exports = connection;