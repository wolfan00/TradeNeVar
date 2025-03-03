const router = require('express').Router();

//kullanıcıları getirme
router.get(`/api/users`, (req, res) => {
    res.status(200).send();
});
//belirli bir kullanıcıyı getirme
router.get(`/api/users/:id`, (req, res) => {
    res.status(200).send();
});
//yeni kullanıcı oluşturma
router.post(`/api/users`, (req, res) => {
    res.status(201).send();
});
//kullanıcı güncelleme
router.put(`/api/users/:id`, (req, res) => {
    res.status(200).send();
});
//kullanıcı silme
router.delete(`/api/users/:id`, (req, res) => {
    res.status(204).send();
});

module.exports = router;