const express = require("express"),
  cors = require("cors");
const { createLink, getLinks, getShortLink } = require("../controllers/linkController");
const router = express.Router();

router
  .post("/links", createLink)
  .get("/:shortUrl", getShortLink)
  .get("/links", getLinks);

exports.linkRoutes = router;