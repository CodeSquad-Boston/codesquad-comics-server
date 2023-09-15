const express = require('express');
const morgan = require('morgan');
const path = require('node:path');
const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.use(express.json());
//configure the public directory (is having the slash pertinent)
app.use(express.static(path.join(__dirname + '/public')));

// Create five basic GET routes with the following information
app.get('/', (request, response, next) => {
  //response.send("This is the index/home page");
 // CHANGE the handler from .send to status().json with a success message 
 response.status(200).json({success: {message: "Index successful"}, statusCode: 200});

});

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


//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:3000/`)
});
