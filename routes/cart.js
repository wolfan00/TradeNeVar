const router = require('express').Router();
const OrderItem = require('../models/OrderItem');

//Tüm sipariş ürünlerini getirme
router.get('/', async (req, res) => {
  try {
    const orderItems = await OrderItem.findAll();
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

//Belirli bir sipariş ürününü getirme
router.get('/:id', async (req, res) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ message: 'OrderItem not found' });
    }
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

//Yeni sipariş ürünü ekleme
router.post('/', async (req, res) => {
  try {
    const { order_id, product_id, quantity, price } = req.body;
    const newOrderItem = await OrderItem.create({
      order_id,
      product_id,
      quantity,
      price,
    });
    res.status(201).json(newOrderItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

//Sipariş ürününü güncelleme
router.put('/:id', async (req, res) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ message: 'OrderItem not found' });
    }
    await orderItem.update(req.body);
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

//Sipariş ürününü silme
router.delete('/:id', async (req, res) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ message: 'OrderItem not found' });
    }
    await orderItem.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
