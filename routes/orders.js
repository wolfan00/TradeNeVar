const router = require('express').Router();
const Order = require('../models/Order.js');
const {auth,authAdmin} = require('../middleware/auth');
// Tüm siparişleri getirme
router.get('/', authAdmin,async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Belirli bir siparişi getirme
router.get('/:id',auth, async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Yeni sipariş ekleme
router.post('/',auth, async (req, res) => {
  try {
    const { user_id, total_price, status } = req.body;
    const newOrder = await Order.create({ user_id, total_price, status });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Sipariş güncelleme
router.put('/:id',auth, async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    await order.update(req.body);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Sipariş silme
router.delete('/:id',authAdmin,async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    await order.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
