
var passport = require('passport-local');
const router = require('express').Router()

module.exports = function( passport) {


    router.get('/error', (req, res) => res.send("error logging in"));
    router.post('/login',
        // passport.authenticate('local', { failureRedirect: '/error' })
        passport.authenticate('local',{failureRedirect : '/' , failureFlash : true}),
        function(req, res) {
            res.redirect('/success?username='+req.user.username);

        });
    router.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));

    // app.get('/', (req, res) => res.render('index.ejs',{ message: req.flash('loginMessage')}));

// app.get('/', (req, res) => res.sendFile('index.html', { root : __dirname}));
    router.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
    router.get('/',(req,res)=> {
        res.render('home.ejs');
    })
    router.get('/login', (req, res) => res.render('index.ejs',{ message: req.flash('loginMessage')}));
    router.get('/signup',(req,res) => {
       res.render('signup.ejs',{message : req.flash('loginMessage')});
    });

    return router ;
}

