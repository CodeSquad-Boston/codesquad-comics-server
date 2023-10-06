//CCS-6 Addition
const mongoose = require('mongoose'); //Open bookModel.js in VSCode and require Mongoose

//Create a new variable called bookSchema. As a value, make a new Schema. To do this, use the new keyword and have mongoose connect to the Schema() method using dot notation
const bookSchema = new mongoose.Schema({
    //The schema should include the following keys: title, author, publisher, genre, pages, rating, synopsis, image
  title: {
    type: String //In order to capture the information for form validation, each key should have a value of an object that contains a type of string.
  },
  author: {
    type: String
  },
  publisher: {
    type: String
  },
  genre: {
    type: String
  },
  pages: {
    type: Number
  },
  rating: {
    type: Number
  },
  synopsis: {
    type: String
  },
  image: {
    type: String
  }
});

const Book = mongoose.model('Book', bookSchema); //Create a new variable called Book that has the Mongoose model as the value. The model should be able to create a collection called ‘Book’ and also use the bookSchema for the collection structure

module.exports = Book; //Make sure to export Book so that it can be used around the application itself