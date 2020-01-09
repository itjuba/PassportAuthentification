var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useUnifiedTopology: true, useNewUrlParser: true });

var products = [new Product({
   username : user ,
    password : password
})];

var done = 0 ;
for (var i =0  ; i<products.length;i++){
    products[i].save(function (err,result) {
        if(err){
            console.log("error occured ! " + err );
        }
        else {
            done++;
            if (done === products.length) {
                exite();
            }
        }
    });


}
function exite () {
    mongoose.disconnect();
} 
