const { Router } = require("express");
const router = Router();
const promisePool = require("../model/index");

// category 조회 api (get)
router.get("/api/category", async function (req, res) {
  const [rows, fields] = await promisePool.query(`SELECT * from Category;`);
  res.send(rows);
});

// category 추가 api (Create)
router.post("/api/category", async (req, res) => {
  const { title } = req.body;
  const [rows, fields] = await promisePool.query(
    `INSERT into Category(title) values(?);`,
    [title]
  );
  console.log(title);
  res.send("success");
});

module.exports = router;
