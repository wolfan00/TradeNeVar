const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const {auth,authAdmin} = require('./middleware/auth');


// Configuring dotenv
dotenv.config();
const app = express();
const port = 3000;

app.use(cookieParser());//cookie okumak için gerekli!
app.use(express.json());  // JSON verisini okumak için gerekli!
app.use(express.urlencoded({ extended: true })); // Form verisi için gerekli!
//Main routes
const cart = require('./main_routes/cart');
const users = require('./main_routes/users');
const signup = require('./main_routes/signup');
const login = require('./main_routes/login');
const orders = require('./main_routes/orders');
const products = require('./main_routes/products');
const refresh = require('./main_routes/refresh');

app.use('/api/orders',auth, orders);
app.use('/api/products',auth, products);
app.use('/api/cart',auth, cart);
app.use('/api/users',auth, users);

app.use('/api/signup', signup);
app.use('/api/login', login);
app.use(`/api/refresh`,refresh);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})