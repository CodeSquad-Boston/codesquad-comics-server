// Added on CCS-3, part 1 - Combining route path and routing methods/ Moving routes into a new home

//require express
const express = require('express');

//link the handler functions to their controller
//const { getAllBooks, getBook, createBook, editBook, deleteBook } = require('../controllers/bookController');

//to test:
const { getAllBooks, getBook, createBook, editBook} = require('../controllers/bookController');

//.get() .post() .put() .delete() are routing methods that allow CRUD Operations to happen. It will lead to the function found in the controller

// Yusuf: all router methods in this file start with '/api/books'
//define the router
const router = express.Router();

//GET to the path of / with the handler function of getAllBooks where you would be able to see all of the books in inventory. 
router.get('/', getAllBooks);

//GET to the path of /:id with the handler function of getBook where you would be able to see an individual book by their specific id
router.get('/:id', getBook);

//POST to the path of /create with the handler function of createBook where you would be able to create a new book entry
router.post('/create', createBook);


//PUT to the path of /edit/:id with the handler function of editBook, where you would be able to see an individual book by their specific id and update that same book you chose
router.put('/edit/:id', editBook);

//DELETE to the path of /delete/:id with the handler function of deleteBook, where you would be able to see an individual book by their specific id and delete that same book you chose
//router.delete('/delete/:id', deleteBook);

//export the router variable to be able to accessed throughout the app
module.exports = router;