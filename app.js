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
app.set("view options", {layout: false}); //tell the app to set two parameters, the first being a string that says "view options" and the second being an object with the key/value pair of layout: false

//Important: keep index route for ability to get to localhost initialization
app.get('/', (request, response, next) => {
 //response.status(200).json({success: {message: "Index successful"}, statusCode: 200}); Then comment out the response.status.json line of code
 //Add response.render to point to the index.html file
 response.render("index.html")
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