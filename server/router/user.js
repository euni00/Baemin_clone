const { Router } = require("express");
const router = Router();
const promisePool = require("../model/index");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const { username, password, email, age } = req.body;
  const [rows, fields] = await promisePool.query(
    `SELECT *
     FROM User
     WHERE email=?
     `,
    [email]
  );
  if (rows.length === 1) {
    res.send("중복된 아이디입니다.");
    return;
  }
  try {
    const hashedpassword = await argon2.hash(password);
    const [rows, fields] = await promisePool.query(
      `INSERT INTO User (username, password, email, age) VALUES (?, ?, ?, ?);`,
      [username, hashedpassword, email, age]
    );
    console.log("signup");
    res.send("success");
  } catch (err) {
    console.log("error : ", err);
    res.send("fail");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows, fields] = await promisePool.query(
      `SELECT *
       FROM User
       WHERE email=?
       `,
      [email]
    );
    if (rows.length === 1) {
      if (await argon2.verify(rows[0].password, password)) {
        const token = jwt.sign(
          { userid: rows[0].userid, email: rows[0].email },
          "secret"
        );
        res.send({
          userid: rows[0].userid,
          username: rows[0].username,
          email: rows[0].email,
          age: rows[0].age,
          access_token: token,
        });
        // password match
      } else {
        res.send("패스워드가 틀렸습니다.");
        // password did not match
      }
    } else {
      res.status(401).send("없는 아이디입니다.");
    }
  } catch (err) {
    console.log("error : ", err);
    res.send("fail");
  }
});

module.exports = router;
