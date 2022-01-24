var express = require("express");
const { default: Books } = require("../utils/Books");
var router = express.Router();

router.get("/books", async function (req, res, next) {
  const books = new Books();
  const bookList = await books.getBooks();
  if (bookList) {
    res.json(bookList);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
