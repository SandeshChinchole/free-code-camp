var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.post("/name", (req, res) => {
    const {first: firstName, last: lastName} = req.body;
    res.json({
        "name": `${firstName} ${lastName}`
    });
});

























 module.exports = app;
