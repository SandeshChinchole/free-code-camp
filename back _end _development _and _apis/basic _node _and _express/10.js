var express = require('express');
var app = express();

app.get("/name", (req, res) => {
    const { first: firstname, last: lastName} = req.query;
    res.json({
        "name": `${firstname} ${lastName}`
    });
});
























 module.exports = app;
