const Router = require('express');
const router = new Router();
const authController = require('../controller/auth.controller');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require("../passport-config");

router.post("/login", passport.authenticate("local"), authController.login)
router.post("/register", authController.registration);
router.get('/user', authController.getUser);

module.exports = router;