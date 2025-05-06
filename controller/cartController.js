import OrderItem from '../models/OrderItem.js';

export const getOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.findAll();
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getOrderItemById = async (req, res) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ message: 'OrderItem not found' });
    }
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createOrderItem = async (req, res) => {
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
};

export const updateOrderItem = async (req, res) => {
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
};

export const deleteOrderItem = async (req, res) => {
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
};

