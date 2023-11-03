//CCS-7 Refactoring
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

//MongoDB connection with env
mongoose
.connect(process.env.DB_URL)
.then(() => console.log("Mongodb is connected"))
.catch((err) => console.log(err));

/*
//MongoDB connection without env 
//Use mongoose.connect() to make your connection to your local MongoDB server.
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/CS-Comics-24')};
//For the first parameter of the connect() method, put in the actual MongoDB connection string 
*/
