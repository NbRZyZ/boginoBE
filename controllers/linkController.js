const { Link } = require("../models/linkModels.js");

exports.createLink = async (req, res) => {
  const url = req.body;
  const result = await new Link(url).save();
  res.send(result);
};

exports.getLinks = async (req, res) => {
  const result = await Link.find({});
  res.send(result); 
};

exports.getShortLink = async (req, res) => {
  const shortUrl = await Link.findOne({ short: req.params.shortUrl });
  console.log(shortUrl);
  if (shortUrl == null) return res.sendStatus(404);
  res.redirect(shortUrl.full);
};