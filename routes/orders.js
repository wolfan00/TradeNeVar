const router = require('express').Router();
const {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controller/ordersController.js');

router.get('/', getOrders);

router.get('/:id', getOrderById);

router.post('/', createOrder);

router.put('/:id', updateOrder);

router.delete('/:id', deleteOrder);

module.exports = router;
