const BookServ = require("../services/book.service");
const response = require("../utils/response");

class BookController {
  async create(req, res) {
    req.body = req.fields;
    const result = await BookServ.create(req.body);
    res.status(200).send(response("Book donated", result));
  }

  async getAll(req, res) {
    const result = await BookServ.getAll();
    res.status(200).send(response("All donated books", result));
  }

  async getOne(req, res) {
    const result = await BookServ.getOne(req.params.userId);
    res.status(200).send(response("Book details", result));
  }

  async update(req, res) {
    const result = await BookServ.update(req.params.userId, req.body);
    res.status(200).send(response("Book updated", result));
  }

  async delete(req, res) {
    const result = await BookServ.delete(req.params.userId);
    res.status(200).send(response("Book deleted", result));
  }
}

module.exports = new BookController();
