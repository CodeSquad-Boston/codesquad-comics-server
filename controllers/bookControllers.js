//disabled
/*
const Book = require('../models/bookModel');

const getAllBooks = async (req, res, next) => {
  try {
    await Book.find({})
      .then(books =>
        res
          .status(200)
          .json({ success: { message: "Found all books!" }, data: books, statusCode: 200 }));
  } catch (err) {
    res
      .status(400)
      .json({ error: { message: "Something went wrong getting all books!" }, statusCode: 400 });
  }
};

const getBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Book.findOne({ _id: id })
      .then(foundBook => {
        res
          .status(200)
          .json({ success: { message: "Found the book!" }, data: foundBook, statusCode: 200 });
      });
  } catch (err) {
    res
      .status(400)
      .json({ error: { message: "Something went wrong getting the book!" }, statusCode: 400 });
  }
};

const createBook = async (req, res, next) => {
  const { title, author, publisher, genre, pages, rating, synopsis } = req.body;

  const newBook = new Book({
    title,
    author,
    publisher,
    genre,
    pages,
    rating,
    synopsis
  });
  try {
    await newBook.save();
    res
      .status(201)
      .json({ success: { message: "A new book is created" }, data: newBook, statusCode: 201 });
  } catch (err) {
    res
      .status(400)
      .json({ error: { message: "Something went wrong creating a book1" }, statusCode: 400 });
  }
};

const editBook = async (req, res, next) => {
  const { id } = req.params;
  const { title, author, publisher, genre, pages, rating, synopsis } = req.body;

  try {
    await Book.findByIdAndUpdate(id, {
      $set: {
        title,
        author,
        publisher,
        genre,
        pages,
        rating,
        synopsis
      }
    }, { new: true });

    res
      .status(201)
      .json({ success: { message: "Book is updated" }, statusCode: 201 });
  } catch (err) {
    res
      .status(400)
      .json({ error: { message: "Something went wrong while editing the book~" }, statusCode: 400 });
  }
};

const deleteBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: { message: "Book deleted successfully!" }, statusCode: 200 });
  } catch (err) {
    res
      .status(400)
      .json({ error: { message: "Something went wrong while deleting the book!" }, statusCode: 400 });
  }
};

module.exports = { getAllBooks, getBook, createBook, editBook, deleteBook };
*/
