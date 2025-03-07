const router = require('express').Router();
const Product = require('../models/Product');
const {auth,authAdmin} = require('../middleware/auth');
// Tüm ürünleri getirme
router.get('/',auth, async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Belirli bir ürünü getirme
router.get('/:id',auth, async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Yeni ürün ekleme
router.post('/',auth, async (req, res) => {
  try {
    const { name, description, price, stock, category_id } = req.body;
    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
      category_id,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Ürün güncelleme
router.put('/:id', auth,async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.update(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Ürün silme
router.delete('/:id',auth,async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
