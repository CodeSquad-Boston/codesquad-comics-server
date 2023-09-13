//disabled
/*
require('dotenv').config();
require('./config/connection');
require('./config/authStrategy');
*/

const express = require('express');
//Dynamic Web App
//new node path syntax - configure the public directory, Dynamic Web App, period 2
const path = require('node:path');
/*
const helmet = require('helmet');
//old path syntax
const passport = require('passport');
const cors = require('cors');

const session = require('express-session');

const booksRoutes = require('./routes/booksRoutes');
const authRoutes = require('./routes/authRoutes');
*/
const morgan = require('morgan');
// INSERT lines 10-20 here
const app = express();
const PORT = 3000;
// disable and simplify port
// const PORT = process.env.PORT || 5000;

//how to use EJS, Dynamic Web App, period 2
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
//Configure the app to set the views folder and know that the views folder exists
//how to use EJS, Dynamic Web App, period 2

/*
app.use(helmet({ contentSecurityPolicy: false }));
*/ 

app.use(morgan('dev'));

/*
app.use(cors());
*/ 
app.use(express.json());
//test to see if this works and can be introduced in dynamic - not able to have this function yet

//configure the public directory (is having the slash pertinent)
app.use(express.static(path.join(__dirname + '/public')));
/*
app.use(express.urlencoded({ extended: false }));


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/books', booksRoutes);
app.use('/', authRoutes);
*/
//---- CB Variables to be used in EJS files. ------
// let userName = 'CodeSquader';
// let date = new Date();
// let year = date.getFullYear();
//---------------------------

//res.json will not work for routing
// OG:
app.get('/', (request, response) => {
  //response.send("This is the index page");
  response.render('index', {
    // name: userName,
    // copyrightYear: year
});
});

app.get('/about', (request, response) => {
  response.send("This is the about page");
});


app.get('/contact', (request, response) => {
  response.send("This is the contact page");
});

// rewritten to standard
// app.listen(PORT);
// console.log(`The server is listening on port ${PORT}`);

//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});