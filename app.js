var express = require("express");
var app = express();
require("date-utils");
var dt = new Date();

var server = app.listen(8080,function(){
    console.log("A Listen Port:" + server.address().port);
});

app.get("/", function(req,res){
    res.redirect(302,'https://280blocker.net/files/280blocker_adblock_' + dt.toFormat("YYYYMM") + '.txt')
});
app.get("/pc", function(req,res){
    res.redirect(302,'https://raw.githubusercontent.com/Yuki2718/adblock/master/japanese/jp-filters.txt')
});