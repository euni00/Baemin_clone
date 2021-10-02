// package 가져오기
const cors = require("cors");
const express = require("express");
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

// express 연결
const app = express();

// cors 에러 해결을 위한 미들웨어
app.use(cors());

// req.body 사용
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 상점 데이터 가져오기 (Read)
app.get("/api/store", async function (req, res) {
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

  // mysql에서 데이터 가져오기
  const [rows, fields] = await promisePool.query("SELECT * from store");
  console.log("rows", rows);
  const storeList = rows;
  res.send(storeList);
});

// /api/store/:id
// id에 해당하는 상점 하나 가져오기 (get)

// 상점 추가 api (Create)
app.post("/api/store", async (req, res) => {
  const { title, minimum_price } = req.body;
  const [rows, fields] = await promisePool.query(
    `INSERT into store(title, star, review_cnt, minimum_price) values(?, 0, 0, ?);`,
    [title, minimum_price]
  );
  console.log(title);
  console.log(minimum_price);
  res.send("success");
});

// 상점 수정 api (Update)
app.put("/api/store", async (req, res) => {
  const { title, minimum_price, _id } = req.body;
  const [rows, fields] = await promisePool.query(
    `update store set title=?, minimum_price=? where _id=?;`,
    [title, minimum_price, _id]
  );
  console.log(title);
  console.log(minimum_price);
  console.log(_id);
  res.send("success");
});

// 상점 삭제 api (Delete)
app.delete("/api/store/:_id", async (req, res) => {
  const { _id } = req.params;
  const [rows, fields] = await promisePool.query(
    `delete from store where _id=?;`,
    [_id]
  );
  console.log(_id);
  res.send("success");
});

// 서버 실행
app.listen(4000, () => {
  console.log("server run");
});
