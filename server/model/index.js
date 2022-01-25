const mysql = require("mysql2");
// 데이터베이스 연결
const pool = mysql.createPool({
  host: "localhost",
  port: 3307,
  user: "client",
  password: "password",
  database: "Baemin",
});
const promisePool = pool.promise();

module.exports = promisePool;
