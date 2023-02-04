const { Router } = require("express");
const { authMiddleware } = require("../common/middleware/authMiddleware");
const { getUsers, createUser ,Verify} = require("../controllers/userController");

const router = Router();

exports.userRouter = router
  .get("/users", authMiddleware, getUsers)
  .post("/users", createUser);
