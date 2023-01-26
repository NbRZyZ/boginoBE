const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization ?? null;

  // console.log("TOKEN", token);
  //   const { username, email } = req.body;
  // console.log(token)
  if (!token) return res.send("Authorization token is required");

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    next();
    //   if (!payload) return res.send("Unauthorized");
  } catch (error) {
    res.send(error);
  }
};
