var express = require("express");
const {
  default: categoryController,
} = require("../controllers/categoryController");
const { default: Books } = require("../utils/Books");
var router = express.Router();

router.post("/books", async function (req, res, next) {
  return await categoryController(req.body?.category)
    .then(async (result) => {
      const books = new Books({ ...req.body });
      const newBook = await books.createBook();
      if (newBook) {
        return res.json(newBook);
      } else {
        return res.sendStatus(400);
      }
    })
    .catch((error) => {
      res.send(error.message);
    });
});

module.exports = router;
