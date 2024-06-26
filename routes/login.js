const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const bodyParser = require("body-parser");
const emailvalidator = require("email-validator");
const validateDate = require("validate-date");
const jsonParser = bodyParser.json();
// Load User model
const User = require("../models/User");
const Travel = require("../models/travel");

router.get("/", forwardAuthenticated, (req, res) => res.render("login"));

router.post("/", (req, res, next) => {
  let a;
  User.findOne({
    email: req.body.email
}, function(err, user) {
    if (err) {
        return res.send({
            error: err
        });
    }
    if(user.required == "Student"){
      a= 1;
    }else if(user.required == "Driver"){
      a= 2;
    }
    if(a == 1){
      passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        failureFlash: true,
      })(req, res, next);
    }else {
      passport.authenticate("local", {
        successRedirect: "/dashboarddriver",
        failureRedirect: "/login",
        failureFlash: true,
      })(req, res, next);
    }
  });
});

module.exports = router;
