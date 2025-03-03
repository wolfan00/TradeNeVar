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
    products: `/products`,
    cart:`/cart`
}


app.listen(port, () => {
    console.log(`server ${port} portunda başlatıldı.`);
});