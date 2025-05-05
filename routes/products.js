import express from 'express';
const router = express.Router();

import{
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controller/productsController.js';

router.get('/', getProducts);

router.get('/:id', getProductById);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;
