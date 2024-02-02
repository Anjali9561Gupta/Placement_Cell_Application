//importing passport packages

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/userSchema');

//Using Strategy(passport-local) for authentication with email and password
const local = new LocalStrategy({ usernameField: 'email' }, function (
  email,
  password,
  done
) {
  User.findOne({ email }, function (error, user) {
    if (error) {
      console.log(`Error in finding user: ${error}`);
      return done(error);
    }

    if (!user || !user.isPasswordCorrect(password)) {
      console.log('Invalid Username/Password');
      return done(null, false);
    }
    return done(null, user);
  });
});

passport.use('local', local);
//Passport will maintain persistent login session

//1. serialize user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//2. deserialize user
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.log('Error in finding user--> Passport');
      return done(err);
    }
    return done(null, user);
  });
});

// check if user is authenticated
passport.checkAuthentication = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/users/signin');
};

// set authenticated user for views
passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};
