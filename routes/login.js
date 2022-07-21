//js

const express = require('express');
const router = express.Router();
const {registerView, LoginView, loginView} = require('../controllers/loginController.js');
router.get('/register', registerView);
router.get('/login', loginView);

module.exports = router;