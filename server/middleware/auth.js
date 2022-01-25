const jwt = require("jsonwebtoken");
const validUser = async (req, res, next) => {
  const access_token = req.headers.access_token;
  try {
    const decoded = await jwt.verify(access_token, "secret");
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send({ error: "유효하지 않은 토큰입니다." }); // 상태 코드
    return;
  }
};

module.exports = { validUser };
