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
  
  const signupRequest = (req, res, next) => {
    //signupRequest
    const { firstName, lastName, username, password } = req.body;
    // encrypt the password and create a new User object with the hashed password
    bcrypt.hash(password, 10, async (error, hashedPassword) => {
      if (error) {
        return next(error);
      }
      const newUser = new User({
        firstName,
        lastName,
        username,
        password: hashedPassword,
      });
  
      try {
        await newUser.save();
        req.login(newUser, (err) => {
          if (err) {
            res
              .status(400)
              .json({
                error: { message: "Something went wrong while signing up!" },
                statusCode: 400,
              });
          }
        });
        res
          .status(201)
          .json({
            success: { message: "New user is created" },
            data: { firstName, lastName, username },
            statusCode: 201,
          });
      } catch (err) {
        if (err.code === 11000 && err.keyPattern.username) {
          // Duplicate key error for the username field
          res
            .status(400)
            .json({
              error: { message: "Username already exists." },
              statusCode: 400,
            });
        } else {
          res
            .status(500)
            .json({
              error: { message: "Internal server error." },
              statusCode: 500,
            });
        }
      }
    });
};

//module.exports the controllers
module.exports = { loginLocalFailed, logoutRequest, signupRequest };