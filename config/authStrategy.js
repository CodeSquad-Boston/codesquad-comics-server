//require passport and bcrypt
const passport = require("passport");
const bcrypt = require("bcrypt");
//define the local strategy
const LocalStrategy = require("passport-local").Strategy;
//Define the github strategy
const GithubStrategy = require('passport-github').Strategy;

//Define google strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//define the User model
const User = require('../models/userModel')

//implement the local strategy
passport.use( //container to use the local strategy
    new LocalStrategy(function verify(username, password, done) {
        //initialize a new LocalStrategy by defining a function called verify, which has three parameters - username, password, done.
      User.findOne({ username: username }) //we will find the User by the findOne() method and target the username as the parameter. 
        .then((user) => { //use the .then() method as another container with the user as the parameter
          if (!user) { //create an if statement to detect if there is NO user using the logical NOT operator
            return done(null, false, { message: "User not found." });
            //Within the if statement, use the return keyword that has the done callback function that contains three parameters - null, false and a message object that says "User not found."
          }
          //After the if statement, we will have bcrypt use the .compare() method with three parameters, and then chain an arrow function as a container. The parameters are password, user.password and (error, result) 
          bcrypt.compare(password, user.password, (error, result) => {
            console.log("result", result); //console.log two parameters, a string that says result and the result parameter
            //stage an if statement that is able to catch errors.
            if (error) {
              return done(error); //Use the return keyword that has the done callback function that contains the error parameter
            }
            return done(null, user); //Use the return keyword that has the done callback function that contains two parameters - null and user
          });
        })
        //Now it’s time to stage the .catch() method as another container with the error as the parameter to handle errors.
        .catch((error) => { 
          console.log(`There was an error finding user from database: ${error}`); //console.log if there were any errors within a template literal using the error parameter.
        });
    })
);

//implement the github strategy
passport.use(new GithubStrategy({ //container to use the local strategy
  //there will be several key value pairs we'll need to define
    clientID: process.env.GITHUB_CLIENT_ID, //key: clientID, value: process.env.GITHUB_CLIENT_ID
    clientSecret: process.env.GITHUB_CLIENT_SECRET, //key: clientSecret, value: process.env.GITHUB_CLIENT_SECRET
    callbackURL: 'http://localhost:3000/auth/github'// key: callbackURL, value: 'http://localhost:3000/auth/github'
  }, //write a comma and stage the next object where
    (accessToken, refreshToken, profile, done) => { //there are 4 parameters, accessToken, refreshToken, profile, done, and an arrow function where we
      // User.create({ username: profile.username, firstName: profile.displayName, strategy: "GitHub" });
      console.log(profile); //console log the profile parameter to see the user's information
      return done(null, profile); //return the done callback where there are two parameters, null and profile
    })
  );

//implement the google strategy
passport.use(new GoogleStrategy({ //Use passport.use() to create a new GoogleStrategy method and create a container
    //The first param is an object that includes the following keys: clientID, clientSecret, callbackURL
  clientID: process.env.GOOGLE_CLIENT_ID, //Use the Environment Variable method as the value for both the clientID and clientSecret
  clientSecret: process.env.GOOGLE_CLIENT_SECRET, //Use the Environment Variable method as the value for both the clientID and clientSecret
  callbackURL: 'http://localhost:3000/auth/google'
},
  (accessToken, refreshToken, profile, done) => { //The second param is a function in which there are 4 parameters
    // User.create({ username: profile.username, firstName: profile.displayName, strategy: "Google" });
    console.log(profile); //console.log the profile
    return done(null, profile); //return the done callback function with two parameters - null and profile.

  })
);

//use Passport documentation to implement the serializeUser/deserializeUser functions 
passport.serializeUser((user, done) => { //Tell passport to serializeUser. Make a function with two parameters - user and a callback function called done.
    done(null, user); //call the callback function done with two parameters - null and user
});

passport.deserializeUser((user, done) => { //Tell passport to deserializeUser. Make a function with two parameters - user and a callback function called done.
    done(null, user); //call the callback function done with two parameters - null and user
});
//end