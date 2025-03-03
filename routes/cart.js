const router = require('express').Router();


//sepet getirme
router.get(`/`, (req, res) => {
    res.status(200).send();
});
//sepete ürün ekleme
router.post(`/`, (req, res) => {
    res.status(201).send();
});
//sepet güncelleme
router.put(`/:id`, (req, res) => {
    res.status(200).send();
});
//sepetteki ürünü silme
router.delete(`/:id`, (req, res) => {
    res.status(204).send();
});

module.exports = router;