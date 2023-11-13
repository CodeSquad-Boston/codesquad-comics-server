//CCS-8: THE FINAL PRODUCT
require('dotenv').config();
require('./config/connection');
require('./config/authStrategy'); 

const express = require('express');
const morgan = require('morgan');
const path = require('node:path');
const cors = require('cors'); 
const helmet = require("helmet");
const passport = require("passport");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3000; 


// Define the Routing Variable 
const booksRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes'); 

//Middleware
app.use(helmet({ contentSecurityPolicy: false })); 
app.use(morgan('dev'));
app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname + '/public')));
//CCS-8 Index Initialization
app.get('/', (request, response, next) => {
 //response.status(200).json({success: {message: "Index successful"}, statusCode: 200}); //Step 1: comment out the response.status.json line of code if you want to show a front end via HTML files. Otherwise, the json message should render on the screen
 
 //Step 2: Add the below if you want to show a front end via HTML boilerplate via template literals.
 response.send(
  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test</title>
  </head>
  <body>
      <h1>Test for Deployment</h1>
      <p>Are you able to see this?</p>
  </body>
  </html>
`
 ) 
})
// CCS-8 end

app.use(
  session({ 
    secret: process.env.SECRET_KEY, 
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routing Paths
app.use('/api/books', booksRoutes);
app.use('/', authRoutes); 

//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:3000/`)
});