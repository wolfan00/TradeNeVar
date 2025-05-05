const router = require('express').Router();
const {getOrderItems, getOrderItemById, createOrderItem, updateOrderItem, deleteOrderItem} = require('../controller/cartController.js');
router.get('/', getOrderItems);

router.get('/:id',getOrderItemById);

router.post('/',createOrderItem);

router.put('/:id',updateOrderItem);

router.delete('/:id',deleteOrderItem);

module.exports = router;
