import { Op } from 'sequelize';
import db from '../models/index.js';

const { Product } = db;

export const getProducts =  async (req,res)=> {try {
    const { category, condition, min, max, q } = req.query;

    const where = {};

    if (category) where.category_id = category;
    if (condition) where.condition = condition;

    if (min || max) {
      where.price = {};
      if (min) where.price[Op.gte] = parseFloat(min);
      if (max) where.price[Op.lte] = parseFloat(max);
    }

    if (q) {
      where[Op.or] =[ { name: { [Op.like]: `%${q}%` } },
        { description: { [Op.like]: `%${q}%` } },]
       ;
    }

    const products = await Product.findAll({ where });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export const getProductById = async (req, res) => {try {
  const product = await Product.findByPk(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(product);
} catch (error) {
  res.status(500).json({ message: 'Server error' });
}
}

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category_id,condition,image,location,location_x_y } = req.body;
    const newProduct = await Product.create({
      name,
      description,
      price,
      condition,
      image,
      location_x_y,
      location,
      stock,
      category_id,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export const updateProduct = async (req, res) => {
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
}

export const deleteProduct = async (req, res) => {
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
}
