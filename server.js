const express = require('express');
const app = express();
const passport = require('passport');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
var flash    = require('connect-flash');
var session      = require('express-session');


require('./models/schema');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'cookie_secret',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(cookieParser('secretString'));

app.use(flash());
app.use(flash());


const port = process.env.PORT || 3003
;
app.listen(port , () => console.log('App listening on port ' + port));
require('./passport/pspt')(passport);
app.use(passport.initialize());
app.use(passport.session());


app.use('/', require('./routes/route')(passport));
require('./databaseseed/seedtry')(app);
mongoose.connect('mongodb://localhost:27017/cms', {useUnifiedTopology: true, useNewUrlParser: true});









