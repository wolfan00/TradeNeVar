const router = require('express').Router();


//ürünleri getirme
router.get(`/`, (req, res) => {
    res.status(200).send();
});
//belirli bir ürünü getirme
router.get(`/:id`, (req, res) => {
    res.status(200).send();
});
//ürün ekleme
router.post(`/`, (req, res) => {
    res.status(201).send();
});
//ürün güncelleme
router.put(`/:id`, (req, res) => {
    res.status(200).send();
});
//ürün silme
router.delete(`/:id`, (req, res) => {
    res.status(204).send();
});

module.exports = router;