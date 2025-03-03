const router = require('express').Router();


//kullanıcının sipariş geçmişini getirme
router.get(`/`, (req, res) => {
    res.status(200).send();
});
//belirli siparişi getir
router.get(`/:id`, (req, res) => {
    res.status(200).send();
});
//yeni sipariş oluşturma
router.post(`/`, (req, res) => {
    res.status(201).send();
});
//siparişi güncelle (sipariş durumu)
router.put(`/:id`, (req, res) => {
    res.status(200).send();
});
//siparişi silme
router.delete(`/:id`, (req, res) => {
    res.status(204).send();
});

module.exports = router;