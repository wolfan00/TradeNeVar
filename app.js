const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());  // JSON verisini okumak için gerekli!
app.use(express.urlencoded({ extended: true })); // Form verisi için gerekli!
//ROUTES
const orders = require('./routes/orders');
const cart = require('./routes/cart');
const users = require('./routes/users');
const products = require('./routes/products');
const signup = require('./routes/signup');
const login = require('./routes/login');
app.use('/api/orders', orders);
app.use('/api/cart', cart);
app.use('/api/users', users);
app.use('/api/products', products);
app.use('/api/signup', signup);
app.use('/api/login', login);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})