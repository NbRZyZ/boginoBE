const { Link } = require("../models/linkModels");

exports.createlink = async (req, res) => {
  const {full , author_id} = req.body || {};
  const result = new Link({
    full,
    author_id
  })
  await result.save();
  res.send(result);
};

exports.getLinks = async (req, res) => {
  const link = await Link.find({});
  res.send(link);
};

exports.getShortlink = async (req, res) => {
  const shortUrl = await Link.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);
  res.redirect(shortUrl.full);
};
