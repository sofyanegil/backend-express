const express = require('express');
const router = express.Router();

const registerController = require('../controllers/RegisterController');
const loginController = require('../controllers/LoginController');

//import validate
const { validateRegister } = require('../utils/validators/auth');
const { validateLogin } = require('../utils/validators/auth');

router.post('/register', validateRegister, registerController.register);
router.post('/login', validateLogin, loginController.login);

module.exports = router;
