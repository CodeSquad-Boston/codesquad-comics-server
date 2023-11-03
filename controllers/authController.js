//require bcrypt
const bcrypt = require("bcrypt");
//require the User model
const User = require('../models/userModel');

//define the handler functions
//Direction: set a constant of loginLocalFailed and equate that to a function where you have a request, response and the next keyword as a parameter before an arrow function.
const loginLocalFailed = (req, res, next) => {
    //Within the function, stage a res.status().json(). The status should be a 401 to signal an Unauthorized error.
    res
      .status(401)
      .json({
        error: { message: "Username or password is incorrect." },
        statusCode: 401,
      }); //for the json method, have an object that is an error and contains a message that says "Username or password is incorrect." Make sure to have the statusCode of 401.
};

//Direction: set a constant of logoutRequest and equate that to a function where you have a request, response and the next keyword as a parameter before an arrow function.
const logoutRequest = (req, res, next) => {
    //use the logout function with the error keyword as a parameter
    req.logout((error) => {
        //use an if statement to catch errors
        if (error) {
            //Within the function, stage a res.status().json(). The status should be a 400 to signal an Bad Request error.
        res
            .status(400)
            .json({ error: { message: "Something went wrong!" }, statusCode: 400 }); //For the json method, have an object that is an error and contains a message that says "Something went wrong!". Make sure to have the statusCode of 400.
        }
        //otherwise, stage a res.status().json(). The status should be a 200 to signal an OK response.
        res
        .status(200)
        .json({ success: { message: "User logged out!" }, statusCode: 200 }); //For the json method, have an object that is success and contains a message that says "User logged out!". Make sure to have the statusCode of 200.
    });
};

//Direction: set a constant of signupRequest and equate that to a function where you have a request, response and the next keyword as a parameter before an arrow function.
const signupRequest = (req, res, next) => {
    //Direction: within the arrow function's object, we are going to define our future form keys so we can capture user input and register that in our database.
    // the keys are: { firstName, lastName, username, password }. Set that as a constant and equate it to the req.body object
    const { firstName, lastName, username, password } = req.body;
    // encrypt the password and create a new User object with the hashed password
    bcrypt.hash(password, 10, async (error, hashedPassword) => { //import the bcrypt package to use the hash method, with three parameters - password, the number 10 which will then act as a salt that will be generated with the specified number of rounds and used, and an asynchronous function that has 2 parameters - error and a hashedPassword.

        //stage an if statement that allows for error handling
      if (error) {
        return next(error); //return the next error
      }
      //otherwise, if there are no errors, we should be able to create a new user within the database. Create a constant of newUser and equate that to the new keyword and the User model.
      const newUser = new User({
        //call the keys we defined earlier
        firstName,
        lastName,
        username,
        password: hashedPassword, //for the password key, we're going to store the hashedPassword value here.
      });
      //next, stage a try/catch statement 
      try {
        await newUser.save(); //use the await keyword to save the newUser using the .save() method.

        //use the login function in order to summon the newUser that we just created or return errors in a function.
        req.login(newUser, (err) => {
            //stage an if statement that allows for error handling
          if (err) {
            //Within the if statement, stage a res.status().json(). The status should be a 400 to signal an Bad Request error.
            res
              .status(400)
              .json({
                error: { message: "Something went wrong while signing up!" },
                statusCode: 400,
              }); //For the json method, have an object that is an error and contains a message that says "Something went wrong while signing up!". Make sure to have the statusCode of 400.

          }
        });
        //otherwise, stage a res.status().json(). The status should be a 201 to signal that a resource was created and that the new user is registered.
        res
          .status(201)
          .json({
            success: { message: "New user is created" },
            data: { firstName, lastName, username },
            statusCode: 201,
          }); //For the json method, have an object that is success and contains a message that says "New user is created". Make sure to have the statusCode of 201.
      } catch (err) { //have the catch statement catch errors, or err.
        //stage if/else statement
        if (err.code === 11000 && err.keyPattern.username) {
          // Duplicate key error for the username field
          //If the error code is equal to 11000, which may happen when a document does not have a value for the indexed field or due to the wrong syntax used AND the error's keyPattern through the username are detected, chain a res.status().json().
          res
            .status(400) //The status should be a 400 to signal an Bad Request error.
            .json({
              error: { message: "Username already exists." },
              statusCode: 400,
            }); //For the json method, have an object that is an error and contains a message that says "Username already exists". Make sure to have the statusCode of 400.
        } else { //otherwise, we should tell the user that there was a server side error in the else statement. Stage a res.status().json(). The status should be a 500 to signal an internal server error response.
          res
            .status(500)
            .json({
              error: { message: "Internal server error." },
              statusCode: 500,
            });  //For the json method, have an object that is an error and contains a message that says"Internal server error". Make sure to have the statusCode of 500.
        }
      }
    });
};

//module.exports the controllers
module.exports = { loginLocalFailed, logoutRequest, signupRequest };