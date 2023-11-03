require('dotenv').config();
require('./config/connection');
require('./config/authStrategy'); // CCS-7 addition of require authStrategy

//END
const express = require('express');
const morgan = require('morgan');
const path = require('node:path');
const cors = require('cors'); //CCS-2 code
//Require express-session, passport, cors, helmet and dotenv
const helmet = require("helmet");
const passport = require("passport");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3000; //Convert the port from a hardcoded number to using the process.env method.


// Define the Routing Variable 
const booksRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes'); //this should be uncommented

//Middleware
app.use(helmet({ contentSecurityPolicy: false })); //tell the app to .use() helmet and within the helmet package, use the contentSecurityPolicy and set it to false
app.use(morgan('dev'));
app.use(cors()); //CCS-2 code

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //CCS-2 code
app.use(express.static(path.join(__dirname + '/public')));

//Important: keep index route for ability to get to localhost initialization
app.get('/', (request, response, next) => {
 response.status(200).json({success: {message: "Index successful"}, statusCode: 200});
})

//Use app.use() in order for the app to know to utilize session (express-session)
app.use(
  session({ //make sure you have an object that contains the secret, resave, and saveUninitalized keys and their values
    secret: process.env.SECRET_KEY, //make sure to use the Environmental Variable method to replace the secret key. The actual key should be added into the .env file under the variable 'SECRET_KEY'
    resave: false,
    saveUninitialized: false,
  })
);

//use app.use() in order to initialize passport
app.use(passport.initialize());
//Use app.use() in order to let passport to utilize session
app.use(passport.session());

//different routing to shift towards React API
// Routing Paths- As a middleware with the .use() to detect the request that is coming through a specific path, it will then call the router function
// Add:
app.use('/api/books', booksRoutes);
app.use('/', authRoutes); //uncomment this

//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:3000/`)
});