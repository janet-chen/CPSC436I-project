const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/User');
const gooogleClientID = process.env.clientID;
const googleClientSecret = process.env.clientSecret; 

passport.serializeUser((user, done)=> {
    done(null, user.id);
});

passport.deserializeUser((id, done)=> {
    User.findById(id).then((user) => {
        done(null, user);
    });
});


passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL:'/auth/google/redirect',
        clientID: gooogleClientID,
        clientSecret: googleClientSecret
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our db
        User.findOne({googleId: profile.id}).then((currentUser)=> {
            if (currentUser) {
               // already have the user registered 
               console.log('already have this user');
               done(null, currentUser);
            } else {
                // create a new user
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('new user created: ' + newUser);
                    done(null, newUser);
                });
            }
        })
    })
)