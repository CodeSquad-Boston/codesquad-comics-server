//disabled
/*
const express = require('express');
const passport = require('passport');

const { loginLocalFailed, logoutRequest, signupRequest } = require('../controllers/authController');

const router = express.Router();

router.post('/login/local', passport.authenticate('local', { failureRedirect: '/login/local/failed' }), (req, res, next) => {
  res
    .status(200)
    .json({ success: { message: "User logged in." }, data: { username: req.user.username, firstName: req.user.firstName, lastName: req.user.lastName }, statusCode: 200 });
});

router.get('/login/local/failed', loginLocalFailed);

router.get('/logout', logoutRequest);

router.post('/signup', signupRequest);

// // github strategy
// router.get('/login/github', passport.authenticate('github'));
// router.get('/login/github/failed', (req, res, next) => {
//   res.json({ message: 'There is a problem with GitHub authentication.' });
// });
// router.get('/auth/github', passport.authenticate('github', {
//   successRedirect: '/',
//   failureRedirect: '/login/github/failed'
// }));

// // google strategy
// router.get('/login/google', passport.authenticate('google', { scope: ['profile'] }));
// router.get('/login/google/failed', (req, res, next) => {
//   res.json({ message: 'There is a problem with Google authentication.' });
// });
// router.get('/auth/google', passport.authenticate('google', {
//   successRedirect: '/',
//   failureRedirect: '/login/google/failed'
// }));

module.exports = router;
*/
