const storeRouter = require("./router/store");
const commentRouter = require("./router/comment");
const categoryRouter = require("./router/category");
const userRouter = require("./router/user");

// package 가져오기
const cors = require("cors");
const express = require("express");
require("./model/index");

// express 연결
const app = express();

// cors 에러 해결을 위한 미들웨어
app.use(cors());

// req.body 사용
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/store", storeRouter);
app.use(commentRouter);
app.use(categoryRouter);
app.use("/api/user", userRouter);

// 서버 실행
app.listen(4000, () => {
  console.log("server run");
});
