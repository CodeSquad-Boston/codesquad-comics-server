const express = require('express');
const morgan = require('morgan');
const path = require('node:path');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.use(morgan('dev'));

app.use(express.json());

// Routes
app.get('/', (request, response) => {
  response.send("This is the index/home page");
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

//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:3000/`)
});
