var express = require('express');
var app = express();

app.use(function middleware(req, res, next){
    let string = req.method + " " + req.path + " - " + req.ip
    console.log(string);
    next();
});


























 module.exports = app;
