const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth');

//Main routes
const users = require('./users');
const cart = require('./cart');
const signup = require('./signup');
const login = require('./login');
const orders = require('./orders');
const products = require('./products');
const refresh = require('./refresh');

router.use('/api/orders',auth, orders);
router.use('/api/products',auth, products);
router.use('/api/cart',auth, cart);
router.use('/api/users',auth, users);

router.use('/api/signup', signup);
router.use('/api/login', login);
router.use(`/api/refresh`,refresh);

module.exports = router;