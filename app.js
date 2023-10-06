// CCS-6 addition of require dotenv and config for connection
require('dotenv').config();
require('./config/connection');

//END
const express = require('express');
const morgan = require('morgan');
const path = require('node:path');
const app = express();
const PORT = 3000;
const cors = require('cors'); //CCS-2 code

// Define the Routing Variable 
const booksRoutes = require('./routes/bookRoutes');
//const authRoutes = require('./routes/authRoutes'); //Kit commentary: KEEP commented out for now, have students code in for now

//Middleware
app.use(morgan('dev'));
app.use(cors()); //CCS-2 code

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //CCS-2 code
app.use(express.static(path.join(__dirname + '/public')));

//Important: keep index route for ability to get to localhost initialization
app.get('/', (request, response, next) => {
 response.status(200).json({success: {message: "Index successful"}, statusCode: 200});
})


//different routing to shift towards React API
// Routing Paths- As a middleware with the .use() to detect the request that is coming through a specific path, it will then call the router function
// Add:
app.use('/api/books', booksRoutes);
//app.use('/', authRoutes); //Kit commentary: KEEP commented out for now, have students code in for now

//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    console.log(`http://localhost:3000/`)
});