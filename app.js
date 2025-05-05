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
//ROUTES
const cart = require('./routes/cart');
const users = require('./routes/users');
const signup = require('./routes/signup');
const login = require('./routes/login');
const orders = require('./routes/orders');
const products = require('./routes/products');
const refresh = require('./routes/refresh');

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