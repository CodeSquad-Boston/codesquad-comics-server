//CCS-6 Addition
//Open connection.js in VSCode and require Mongoose
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

//MongoDB connection without env 
//Use mongoose.connect() to make your connection to your local MongoDB server.
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/CS-Comics-24')}; //this is a link so the DB works on Kit's MongoDB.
//For the first parameter of the connect() method, put in the actual MongoDB connection string 

//Kit edit: students should have await mongoose.connect('') so their URLs aren't pushed to github