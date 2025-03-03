const express = require('express');
const app = express();
const port = 3000;
//Routes
//ürünleri getirme
app.get(`/api/products`, (req, res) => {
    res.status(200).send();
});
//ürün ekleme
app.post(`/api/products`, (req, res) => {
    res.status(201).send();
});
//ürün güncelleme
app.put(`/api/products/:id`, (req, res) => {
    res.status(200).send();
});
//ürün silme
app.delete(`/api/products/:id`, (req, res) => {
    res.status(204).send();
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})