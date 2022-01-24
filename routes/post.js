var express = require("express");
const { default: Books } = require("../utils/Books");
var router = express.Router();

router.post("/books", async function (req, res, next) {
  const books = new Books({ ...req.body });
  const newBook = await books.createBook();
  if (newBook) {
    res.json(newBook);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
