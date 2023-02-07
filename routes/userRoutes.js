const { Router } = require("express");
const { authMiddleware } = require("../common/middleware/authMiddleware");
const { Nasa } = require("../controllers/authController");
const { getUsers } = require("../controllers/userController");

const router = Router();

exports.userRouter = router
  .get("/nasa", Nasa)
  .get("/users", authMiddleware, getUsers);
