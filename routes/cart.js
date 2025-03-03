const router = require('express').Router();


//sepet getirme
router.get(`/api/cart`, (req, res) => {
    res.status(200).send();
});
//sepete ürün ekleme
router.post(`/api/cart`, (req, res) => {
    res.status(201).send();
});
//sepet güncelleme
router.put(`/api/cart/:id`, (req, res) => {
    res.status(200).send();
});
//sepetteki ürünü silme
router.delete(`/api/cart/:id`, (req, res) => {
    res.status(204).send();
});

module.exports = router;