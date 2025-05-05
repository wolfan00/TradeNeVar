const router = require('express').Router();
const { createRefreshToken } = require('../controller/refreshController.js');

router.post('/', createRefreshToken)

module.exports = router;