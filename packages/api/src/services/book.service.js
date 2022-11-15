const Books = require("../models/book.model");
const CustomError = require("../utils/custom-error");
class BookService {
  async create(data) {
    return await new Books(data).save();
  }

  async getAll() {
    return await Books.find({}, { password: 0, __v: 0 });
  }

  async getOne(bookId) {
    const book = await Books.findOne(
      { _id: bookId },
      { password: 0, __v: 0 }
    );
    if (!book) throw new CustomError("book does not exist");

    return book
  }

  async update(bookId, data) {
    const book = await Books.findByIdAndUpdate(
      { _id: bookId },
      { $set: data },
      { new: true }
    );

    if (!book) throw new CustomError("Book dosen't exist", 404);

    return book;
  }

  async delete(bookId) {
    const book = await Books.findOne({ _id: bookId });
    book.remove()
    return book
  }
}

module.exports = new BookService();