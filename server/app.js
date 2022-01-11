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

// mysql에서 상점 데이터 가져오기 (Read)
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

  const [rows, fields] = await promisePool.query(
    `SELECT *, Store._id AS Store_id from Store
    LEFT JOIN Category
    ON Store.category_id = Category._id
    LEFT JOIN Place
    ON Store.place_id = Place._id;
    `
  );
  console.log("rows", rows);
  const storeList = rows;
  res.send(storeList);
});

// /api/store/:_id
// id에 해당하는 상점 하나 가져오기 (get)
app.get("/api/store/:_id", async function (req, res) {
  const { _id } = req.params;
  const [rows, fields] = await promisePool.query(
    `SELECT * from Store WHERE _id=?;`,
    [_id]
  );
  console.log(_id);
  res.send(rows);
});

// 상점 추가 api (Create)
app.post("/api/store", async (req, res) => {
  const { storename, star, minimum_price, place_id, category_id } = req.body;
  const [rows, fields] = await promisePool.query(
    `INSERT into Store(storename, star, minimum_price, place_id, category_id) values(?, ?, ?, ?, ?);`,
    [storename, star, minimum_price, place_id, category_id]
  );
  console.log(storename);
  console.log(star);
  console.log(minimum_price);
  console.log(place_id);
  console.log(category_id);
  res.send("success");
});

// 상점 수정 api (Update)
app.put("/api/store", async (req, res) => {
  const { storename, minimum_price, place_id, category_id, _id } = req.body;
  const [rows, fields] = await promisePool.query(
    `update Store set storename=?, star=0, minimum_price=?, place_id=?, category_id=? where _id=?;`,
    [storename, minimum_price, place_id, category_id, _id]
  );
  console.log(storename);
  console.log(minimum_price);
  console.log(place_id);
  console.log(category_id);
  console.log(_id);
  res.send("success");
});

// 상점 삭제 api (Delete)
app.delete("/api/store/:_id", async (req, res) => {
  const { _id } = req.params;
  const [rows, fields] = await promisePool.query(
    `delete from Store where _id=?;`,
    [_id]
  );
  console.log(_id);
  res.send("success");
});

// 댓글 추가 api (Create)
app.get("/api/comment", async (req, res) => {
  res.send("success");
});

// category 조회 api (get)
app.get("/api/category", async function (req, res) {
  const [rows, fields] = await promisePool.query(`SELECT * from Category;`);
  res.send(rows);
});

// category 추가 api (Create)
app.post("/api/category", async (req, res) => {
  const { title } = req.body;
  const [rows, fields] = await promisePool.query(
    `INSERT into Category(title) values(?);`,
    [title]
  );
  console.log(title);
  res.send("success");
});

// 서버 실행
app.listen(4000, () => {
  console.log("server run");
});
