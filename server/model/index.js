const mysql = require("mysql2");
// 데이터베이스 연결
const pool = mysql.createPool({
  host: process.env.HOST,
  port: 3306,
  user: "admin",
  password: process.env.PASSWORD,
  database: "Baemin",
});
const promisePool = pool.promise();

module.exports = promisePool;
