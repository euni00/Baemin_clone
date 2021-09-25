const cors = require("cors");
const express = require("express");
const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  port: 3307,
  user: "client",
  password: "password",
  database: "Baemin",
});

const promisePool = pool.promise();
const app = express();
app.use(cors());

app.get("/api/stores", async function (req, res) {
  //   const storeList = [
  //     {
  //       title: "store1",
  //       star: 4.9,
  //       review_cnt: 100,
  //       minimum_price: 15000,
  //     },
  //     {
  //       title: "store2",
  //       star: 4.3,
  //       review_cnt: 300,
  //       minimum_price: 17000,
  //     },
  //   ];

  const [rows, fields] = await promisePool.query("SELECT * from store");
  console.log(rows);
  const storeList = rows;
  res.send(storeList);
});

app.listen(4000, () => {
  console.log("server run");
});
