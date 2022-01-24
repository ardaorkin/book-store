var express = require("express");
const { default: Books } = require("../utils/Books");
var router = express.Router();

router.delete("/books/:id", async function (req, res, next) {
  const book = new Books({ where: { id: req.params.id } });
  const deletedBook = await book.deleteBook();
  if (deletedBook) {
    res.json(deletedBook);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
