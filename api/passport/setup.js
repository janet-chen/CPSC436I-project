const bcrypt = require('bcryptjs');
const User = require('../models/users');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findbyId(id, (err, user) => {
        done(err, user);
    })
})

passport.use(
    new LocalStrategy({ usernameField: "email"}, (email, password, done) => {
        // Match user
        User.findOne({ email: email })
            .then(user => {
                if (!user) {
                    const newUser = new User({ email, password });
                    // hash password before saving in db
                    bcrypt.genSlat(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser 
                                .save()
                                .then(user => {
                                    return done(null, user);
                                })
                                .catch(err => {
                                    return done(null, false, { message: err });
                                });
                        });
                    });
                    // return other user
                } else {
                    return done(null, false, { message: err });
                }
            })
            .catch (err => {
                return done(null, false, { message: err });
            });
    })
);

module.exports = passport;