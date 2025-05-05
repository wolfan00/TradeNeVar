import { Router } from 'express';
const router = Router();
import { getOrderItems, getOrderItemById, createOrderItem, updateOrderItem, deleteOrderItem } from '../controller/cartController.js';
router.get('/', getOrderItems);

router.get('/:id',getOrderItemById);

router.post('/',createOrderItem);

router.put('/:id',updateOrderItem);

router.delete('/:id',deleteOrderItem);

export default router;
