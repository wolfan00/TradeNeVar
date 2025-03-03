const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 3000;

//template engine
app.set('view engine', 'ejs');

//middle wares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const routes = {
  home: `/`, //anasayfa
  products: `/products`, //ürün detay
  cart: `/cart`, //sepet
  checkout: `/checkout`, //ödeme
};

app.get(routes.home, (req, res) => {
  res.render('products', { title: 'Ürünler' });
});
app.get(routes.cart, (req, res) => {
  res.render('cart', { title: 'Ürünler' });
});
app.listen(port, () => {
  console.log(`server ${port} portunda başlatıldı.`);
});
