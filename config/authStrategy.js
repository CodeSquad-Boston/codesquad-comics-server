//disabled 
/*
const passport = require('passport');
const crypto = require('crypto');
const LocalStrategy = require('passport-local').Strategy;
// const GithubStrategy = require('passport-github').Strategy;
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/userModel');

// local strategy
passport.use(new LocalStrategy(function verify(username, password, done) {
  User.findOne({ username: username })
    .then(user => {
      if (!user) {
        return done(null, false, { message: 'User not found.' });
      }
      crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', (error, hashedPassword) => {
        if (error) {
          return done(error);
        }
        if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
          return done(null, false, { message: 'Incorrect username or password.' });
        }
        return done(null, user);
      });
    })
    .catch(error => {
      console.log(`There was an error finding user from database: ${error}`);
    });
}));

// // github strategy
// passport.use(new GithubStrategy({
//   clientID: process.env.GITHUB_CLIENT_ID,
//   clientSecret: process.env.GITHUB_CLIENT_SECRET,
//   callbackURL: 'http://localhost:3000/auth/github'
// },
//   (accessToken, refreshToken, profile, done) => {
//     // User.create({ username: profile.username, firstName: profile.displayName, strategy: "GitHub" });
//     console.log(profile);
//     return done(null, profile);
//   })
// );

// // google strategy
// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: 'http://localhost:3000/auth/google'
// },
//   (accessToken, refreshToken, profile, done) => {
//     // User.create({ username: profile.username, firstName: profile.displayName, strategy: "Google" });
//     console.log(profile);
//     return done(null, profile);
//   })
// );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
*/
