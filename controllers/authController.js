const { generateToken } = require("../common/generateToken");
const { User } = require("../models/userModels");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  const { password, email } = req.body || {};
  if (!password || !email)
    return res.send("username, password and email is required");

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

  if (!email || !password) return res.send("password and email is required");

  try {
    const user = await User.findOne({ email });

    const token = generateToken({ email, password });

    const isEqual = await bcrypt.compare(password, user.password);
    if (isEqual) return res.send(token);
    res.send(user);

    res.send("Your password is incorrect");
  } catch (error) {
    throw res.send("User not found");
  }
};
