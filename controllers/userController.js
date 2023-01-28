const { User } = require("../models/userModels");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

exports.createUser = async (req, res) => {
  const {  password, email } = req.body || {};
  // username,

  if ( !password || !email)
  // !username ||
    return res.send("username, password and email is required");

  try {
    const userDocument = new User({  password, email });
    // username,
    const user = await userDocument.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};
