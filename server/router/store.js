const { Router } = require("express");
const router = Router();
const promisePool = require("../model/index");
const jwt = require("jsonwebtoken");
const { validUser } = require("../middleware/auth");

// mysql에서 상점 데이터 가져오기 (Read)
router.get("/", async function (req, res) {
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
router.get("/:_id", async function (req, res) {
  const { _id } = req.params;
  const [rows, fields] = await promisePool.query(
    `SELECT * from Store WHERE _id=?;`,
    [_id]
  );
  console.log(_id);
  res.send(rows);
});

// 상점 추가 api (Create)
router.post("/", validUser, async (req, res) => {
  const { storename, star, minimum_price, place_id, category_id } = req.body;
  const [rows, fields] = await promisePool.query(
    `INSERT into Store(storename, star, minimum_price, place_id, category_id, author) values(?, ?, ?, ?, ?, ?);`,
    [storename, star, minimum_price, place_id, category_id, req.user.email]
  );
  console.log(storename);
  console.log(star);
  console.log(minimum_price);
  console.log(place_id);
  console.log(category_id);
  res.send("success");
});

// 상점 수정 api (Update)
router.put("/", validUser, async (req, res) => {
  const { storename, minimum_price, place_id, category_id, _id } = req.body;
  const [authorRows, authorFields] = await promisePool.query(
    `SELECT author FROM Store WHERE _id=?`,
    [_id]
  );
  console.log(authorRows[0].author);
  if (authorRows[0].author !== req.user.email) {
    res.status(401).send({ error: "글작성자만 수정할 수 있습니다." }); // 상태 코드
    return;
  }
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
router.delete("/:_id", validUser, async (req, res) => {
  const { _id } = req.params;
  const [authorRows, authorFields] = await promisePool.query(
    `SELECT author FROM Store WHERE _id=?`,
    [_id]
  );
  console.log(authorRows[0].author);
  if (authorRows[0].author !== req.user.email) {
    res.status(401).send({ error: "글작성자만 삭제할 수 있습니다." }); // 상태 코드
    return;
  }
  const [rows, fields] = await promisePool.query(
    `delete from Store where _id=?;`,
    [_id]
  );
  console.log(_id);
  res.send("success");
});

module.exports = router;
