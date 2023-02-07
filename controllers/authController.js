const { generateToken } = require("../common/generateToken");
const { User } = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  const { password, email } = req.body || {};
  if (!password || !email) console.log(403);
  // return res.send("username, password and email is required");

  try {
    const encrypted = await bcrypt.hash(password, 10);
    const user = await new User({
      email,
      password: encrypted,
    }).save();
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body || {};

  // if (!email || !password) return res.send("password and email is required");
  console.log(403);
  try {
    const user = await User.findOne({ email });

    const token = generateToken({ email, password });

    const isEqual = await bcrypt.compare(password, user.password);
    if (isEqual) return res.send(token);
    console.log(403);
    // res.send("Your password is incorrect");
  } catch (error) {
    console.log(403);
    // throw res.send("User not found");
  }
};

exports.Nasa = (req, res) => {
  if (req.headers.authorization) {
    try {
      jwt.verify(
        req.headers.authorization,
        process.env.JWT_SECRET,
        (error, item) => {
          if (!error) {
            res.send(item);
          }
        }
      );
    } catch (error) {
      res.status(403);
    }
  } else {
    res.status(404).send("Authentication required");
  }
};
