var express = require("express");
const {
  default: categoryController,
} = require("../controllers/categoryController");
const { default: Books } = require("../utils/Books");
var router = express.Router();

router.put(
  "/books",
  async function (req, res, next) {
    if (req.body.payload.hasOwnProperty("category")) {
      await categoryController(req.body.payload.category)
        .then((result) => {
          return next();
        })
        .catch((error) => res.send(error.message));
    } else {
      return next();
    }
  },
  async function (req, res) {
    const books = new Books({ ...req.body });
    const newBook = await books.updateBook();
    if (newBook) {
      res.json(newBook);
    } else {
      res.sendStatus(400);
    }
  }
);

module.exports = router;
