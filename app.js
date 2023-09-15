const express = require('express');
const morgan = require('morgan');
const path = require('node:path');
const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.use(express.json());
//configure the public directory (is having the slash pertinent)
app.use(express.static(path.join(__dirname + '/public')));

// formerly from CCS-1
/*

// Create five basic GET routes with the following information
// keep the index route

app.get('/about', (request, response) => {
  //response.send("This is the about page");
  response.status(200).json({success: {message: "About successful"}, statusCode: 200});
});

app.get('/login', (request, response) => {
  //response.send("This is the login page");
  response.status(200).json({success: {message: "Login successful"}, statusCode: 200})
});

app.get('/admin-console', (request, response) => {
  //response.send("This is the admin console page");
  response.status(200).json({success: {message: "Admin console successful"}, statusCode: 200})
});

app.get('/admin-console/create-book', (request, response) => {
  //response.send("This is the create book page")
  response.status(200).json({success: {message: "Create book successful"}, statusCode: 200});
});
*/

//keep the index route
app.get('/', (request, response, next) => {
  //response.send("This is the index/home page");
 // CHANGE the handler from .send to status().json with a success message 
 response.status(200).json({success: {message: "Index successful"}, statusCode: 200});

})


//different routing to shift towards React API

app.get('/api/books', (request, response, next) => {
  response.status(200).json({success: {message: "render a file that will have all of the books"}, statusCode: 200});
});

app.get('/api/books/:id', (request, response, next) => {
  response.status(200).json({success: {message: "render a file that will show the books details page, or each book by their ID"}, statusCode: 200});
});

app.get('/api/books/create', (request, response, next) => {
  response.status(200).json({success: {message: " render a file that will have the ability to create new books"}, statusCode: 200});
});

app.get('/api/books/edit/:id', (request, response, next) => {
  response.status(200).json({success: {message: " render the update comic book form page to modify a book by their ID"}, statusCode: 200});
});

app.get('/api/books/delete/:id', (request, response, next) => {
  response.status(200).json({success: {message: "render a file that will have the ability to delete a book by their ID"}, statusCode: 200});
});

// routes have been tested


//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:3000/`)
});
