const { Router } = require("express");
const router = Router();
const promisePool = require("../model/index");

// 댓글 추가 api (Create)
router.get("/api/comment", async (req, res) => {
  res.send("success");
});

module.exports = router;
