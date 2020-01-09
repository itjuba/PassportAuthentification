
const bcrypt = require('bcrypt');
var User = require('../models/schema');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {



    passport.serializeUser(function(user, cb) {
        cb(null, user.id);
    });

    passport.deserializeUser(function(id, cb) {
        User.findById(id, function(err, user) {
            cb(err, user);
        });
    });

    passport.use(new LocalStrategy( {
        passReqToCallback : true},
    function (req,username, password, done) {
            User.findOne({
                username: username
            }, function (err, user) {
                if (err) {
                    return done(err);

                }

                if (!user) {
                    return done(null, false,req.flash('loginMessage', 'No user found.'));
                }




                bcrypt.compare(req.body.password, user.password, function (err, result) {

                    if (result != true) {
                        return done(null, false);
                    }
                });
                return done(null, user);
            });
        }
    ));

}
 
