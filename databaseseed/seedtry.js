 var mongoose = require('mongoose');
var User = require('../models/schema');
const bcrypt = require('bcrypt');
module.exports = function(app) {
    mongoose.connect('mongodb://localhost:27017/cms', {useUnifiedTopology: true, useNewUrlParser: true});



    app.post('/signup', function(req, res) {
        bcrypt.hash(req.body.password, 10, function (err,   hash) {
        new User({
            username: req.body.username ,
            password : hash
        }).save(function(err, user) {
            if (err) res.json(err);
            else {
                console.log('data inserted ');
                res.redirect('/login');
            }
        });
        });
    });



    function exite() {
        mongoose.disconnect();
    }

}
