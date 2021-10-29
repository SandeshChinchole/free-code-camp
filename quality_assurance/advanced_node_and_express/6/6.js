'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const passport = require("passport");
const session = require("express-session");
const ObjectID = require("mongodb").ObjectId;
const localStrategy = require("passport-local");


const app = express();
app.set("view engine", "pug");

fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUnintialized: true,
  cookie: {secure: false}
}));
app.use(passport.initialize());
app.use(passport.session());


myDB(async client => {
  const myDataBase = await client.db("database").collection("users");

  app.route("/").get((req, res) => {
    res.render("pug", {
      "title": "Connected to Database",
      "message": "Please Login"
    });
  });

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    myDataBase.findOne({"_id": new ObjectId(id)}, (err, doc) => {
      done(null, doc);
    });
  });

passport.use(new localStrategy((username, password, done) => {
  myDataBase.findOne({"username": "username"}, (err, user) => {
    console.log("User " + username + " tried to log in");
    if(err) {
      return done(err);
    };
    if(!user){
      return done(null, false);
    };
    if(password !== user.password){
      return done(null, false);
    };
    done(null, user);
  })
}));

}).catch(e => {

  app.route("/").get((req, res) => {
    res.render("pug", {
      "title": e,
      "message": "Unable to Login"
    });
  })
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
