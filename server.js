const express = require("express");
const cors = require("cors");
const connect = require("./common/config/db");
require("dotenv").config();

const { userRouter } = require("./routes/userRoutes");
const { authRouter } = require("./routes/authRoutes");
const { linkRouter } = require("./routes/linkRoutes");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect();

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.use(userRouter);
app.use(linkRouter);
app.use(authRouter);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
