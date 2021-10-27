var express = require('express');
var app = express();

app.get("/name", (req, res) => {
    const { first: firstName, last: lastName} = req.query;
    res.json({
        "name": `${firstName} ${lastName}`
    });
});
























 module.exports = app;
