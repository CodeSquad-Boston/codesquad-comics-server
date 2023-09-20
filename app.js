const express = require('express');
const morgan = require('morgan');
const path = require('node:path');
const app = express();
const PORT = 3000;
const cors = require('cors');

//Middleware
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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


// POTENTIAL BONUS QUESTION: Three teaching fellows want to be showcased on the teacher route, which is under tight wraps until you develop it!

// Initialize a variable called teachingFellows and then create an array that contains an object for each TF. Each object should have a key of _id, firstName, lastName and favColor with a corresponding string as a value.

// The info is as follows: Kit Amreik, who's favorite color is blue with and id of 001.
// Test Tommy, who's favorite color is teal with and id of 002.
// And finally, Bout It Betty, who's favorite color is brown with and id of 003.

//Don't forget the status code to let you know the route loaded OK!

let teachingFellows = [
  {
    _id: "001",
    firstName: "Kit",
    lastName: "Amreik",
    favColor: "blue"
  },
  {
    _id: "002",
    firstName: "Test",
    lastName: "Tommy",
    favColor: "Teal"
  },
  {
    _id: "003",
    firstName: "Bout it",
    lastName: "Betty",
    favColor: "brown"
  }
]

app.get('/teacher', (request, response, next) => {
  response.status(200).json(
    {success: {message: [
      {
        _id: "001",
        firstName: "Kit",
        lastName: "Amreik",
        favColor: "blue"
      },
      {
        _id: "002",
        firstName: "Test",
        lastName: "Tommy",
        favColor: "Teal"
      },
      {
        _id: "003",
        firstName: "Bout it",
        lastName: "Betty",
        favColor: "brown"
      }
    ]}, statusCode: 200}
    );
})


//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:3000/`)
});
