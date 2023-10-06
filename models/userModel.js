//CCS-6 Addition
const mongoose = require('mongoose'); //Open userModel.js in VSCode and require Mongoose

//Create a new variable called userSchema. As a value, make a new Schema. To do this, use the new keyword and have mongoose connect to the Schema() method using dot notation
const userSchema = new mongoose.Schema({
    //The schema should include the following keys:
  firstName: {
    type: String, // the firstName, lastName, username and strategy keys should have a value of an object that contains a type of string.
    required: true //In addition, the firstName, username and strategy keys should have the required parameter be true
  },
  lastName: {
    type: String, // the firstName, lastName, username and strategy keys should have a value of an object that contains a type of string.
  },
  username: {
    type: String, // the firstName, lastName, username and strategy keys should have a value of an object that contains a type of string.
    required: true, //In addition, the firstName, username and strategy keys should have the required parameter be true
    unique: true //Finally, the username key needs to have a unique parameter that is also true 
  },
  password: {
    type: Buffer //Next, the password and salt keys have a type of buffer.
  },
  salt: {
    type: Buffer //Next, the password and salt keys have a type of buffer.
  },
  strategy: {
    type: String, // the firstName, lastName, username and strategy keys should have a value of an object that contains a type of string.
    required: true //In addition, the firstName, username and strategy keys should have the required parameter be true
  }
});

const User = mongoose.model('User', userSchema); //Create a new variable called User that has the Mongoose model as the value. The model should be able to create a collection called ‘User’ and also use the userSchema for the collection structure

module.exports = User; //Make sure to export User so that it can be used around the application itself