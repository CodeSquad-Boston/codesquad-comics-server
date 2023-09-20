// CCS-3, PART 1 (formerly HW 12)
const express = require('express');
const morgan = require('morgan');
const path = require('node:path');
const app = express();
const PORT = 3000;
const cors = require('cors');

// Define the Routing Variable 
const booksRoutes = require('./routes/bookRoutes');
//const authRoutes = require('./routes/authRoutes'); //Kit commentary: KEEP commented out for now, have students code in for now

//Middleware
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/public')));

//Important: keep index route for ability to get to localhost initialization
app.get('/', (request, response, next) => {
  //response.send("This is the index/home page");
 // CHANGE the handler from .send to status().json with a success message 
 response.status(200).json({success: {message: "Index successful"}, statusCode: 200});

})


//different routing to shift towards React API
// Routing Paths- As a middleware with the .use() to detect the request that is coming through a specific path, it will then call the router function
// Add:
app.use('/api/books', booksRoutes);
//app.use('/', authRoutes); //Kit commentary: KEEP commented out for now, have students code in for now

//formerly CCS-2 code, students should have commented out for testing or removed the below routes
/*
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
*/

//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:3000/`)
});
