var express = require("express");
var app = express();
require("date-utils");

var server = app.listen(8080,function(){
    console.log("A Listen Port:" + server.address().port);
});

app.get("/sp", function(req,res){
    res.redirect(302,'https://raw.githubusercontent.com/Yuki2718/adblock/master/japanese/jp-mob.txt')
});
app.get("/pc", function(req,res){
    res.redirect(302,'https://raw.githubusercontent.com/Yuki2718/adblock/master/japanese/jp-filters.txt')
});