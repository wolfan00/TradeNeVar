
const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controller/usersController.js');

router.get('/',getAllUsers);

router.get('/:id',getUserById);

router.post('/',createUser);

router.put('/:id', updateUser);

router.delete('/:id',deleteUser);

module.exports = router;
