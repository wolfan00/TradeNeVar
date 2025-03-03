const router = require('express').Router();


//kullanıcının sipariş geçmişini getirme
router.get(`/api/orders`, (req, res) => {
    res.status(200).send();
});
//belirli siparişi getir
router.get(`/api/orders/:id`, (req, res) => {
    res.status(200).send();
});
//yeni sipariş oluşturma
router.post(`/api/orders`, (req, res) => {
    res.status(201).send();
});
//siparişi güncelle (sipariş durumu)
router.put(`/api/orders/:id`, (req, res) => {
    res.status(200).send();
});
//siparişi silme
router.delete(`/api/orders/:id`, (req, res) => {
    res.status(204).send();
});

module.exports = router;