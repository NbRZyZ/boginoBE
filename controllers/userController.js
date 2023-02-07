const { User } = require("../models/userModels");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate('links');
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

