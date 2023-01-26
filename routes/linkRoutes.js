const express = require("express");
const {
  getLinks,
  createlink,
  getShortlink,
} = require("../controllers/linkController");

const router = express.Router();

router
  .get("/links", getLinks)
  .get("/:shortUrl", getShortlink)
  .post("/links", createlink);

module.exports.linkRouter = router;
