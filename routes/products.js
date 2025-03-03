const router = require('express').Router();


//ürünleri getirme
router.get(`/api/products`, (req, res) => {
    res.status(200).send();
});
//belirli bir ürünü getirme
router.get(`/api/products/:id`, (req, res) => {
    res.status(200).send();
});
//ürün ekleme
router.post(`/api/products`, (req, res) => {
    res.status(201).send();
});
//ürün güncelleme
router.put(`/api/products/:id`, (req, res) => {
    res.status(200).send();
});
//ürün silme
router.delete(`/api/products/:id`, (req, res) => {
    res.status(204).send();
});

module.exports = router;