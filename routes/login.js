const router = require('express').Router();
const { createAccessToken } = require('../controller/loginController');

router.post("/", createAccessToken);


module.exports = router;