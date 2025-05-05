const router = require('express').Router();
const   { signUpUser } = require('../controller/signupController.js');

router.post('/', signUpUser);

module.exports = router;