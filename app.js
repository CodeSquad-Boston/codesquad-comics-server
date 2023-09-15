const express = require('express');
const morgan = require('morgan');
const path = require('node:path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.use(morgan('dev'));

app.use(express.json());
//configure the public directory (is having the slash pertinent)
app.use(express.static(path.join(__dirname + '/public')));

// Routes

app.get('/', (request, response) => {
  response.send("This is the index/home page")
  //response.send({success: {message: "Index successful"}, statusCode: 200})
  response.status(200).json({success: {message: "Index successful"}, statusCode: 200})
});

app.get('/about', (request, response) => {
  response.send("This is the about page");
});

app.get('/login', (request, response) => {
  response.send("This is the login page");
});

app.get('/admin-console', (request, response) => {
  response.send("This is the admin console page");
});

app.get('/admin-console/create-book', (request, response) => {
  response.send("This is the create book page");
});

//changing routes to allow for API/postman
app.get('/api/books', (request, response) => {
  response.send("This is for all of the books");
})
app.get('/api/books/:id', (request, response) => {
  response.send("This is to find a specific book by the ID");
})

//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:3000/`)
});
