const router = require('express').Router();

//kullanıcıları getirme
router.get(`/`, (req, res) => {
    res.status(200).send();
});
//belirli bir kullanıcıyı getirme
router.get(`/:id`, (req, res) => {
    res.status(200).send();
});
//yeni kullanıcı oluşturma
router.post(`/`, (req, res) => {
    res.status(201).send();
});
//kullanıcı güncelleme
router.put(`/:id`, (req, res) => {
    res.status(200).send();
});
//kullanıcı silme
router.delete(`/:id`, (req, res) => {
    res.status(204).send();
});

module.exports = router;