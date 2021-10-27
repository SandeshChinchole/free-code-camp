var express = require('express');
var app = express();

/** solution 1 */

app.get("/json", (req, res) => {
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({
            "message": "HELLO JSON"
        });
    } else {
        res.json({
            "message": "hello json"
        });
    }
});

/* solution 2 */

app.get('/json', (req, res) => {
    let data = {"message": "Hello json"};
    if(process.env.MESSAGE_STYLE === 'uppercase'){
      data.message = data.message.toUpperCase();
    }
    res.json(data);
});


























 module.exports = app;
