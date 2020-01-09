 var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserDetail = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('userInfo', UserDetail,'userInfo');
// const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');
