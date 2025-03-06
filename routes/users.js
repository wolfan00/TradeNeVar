// routes/users.js
const express = require('express').Router();
const User = require('../models/User');

// Kullanıcıları getirme
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll(); // Bütün kullanıcıları getir
    res.status(200).json(users); // JSON formatında kullanıcıları döndür
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Belirli bir kullanıcıyı getirme
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id); // ID'ye göre kullanıcıyı getir
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user); // JSON formatında kullanıcıyı döndür
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Yeni kullanıcı oluşturma
router.post('/', async (req, res) => {
  const {
    first_name,
    last_name,
    age,
    gender,
    email,
    password,
    phone,
    address,
  } = req.body;

  try {
    const newUser = await User.create({
      first_name,
      last_name,
      age,
      gender,
      email,
      password,
      phone,
      address,
    });
    res.status(201).json(newUser); // Yeni kullanıcıyı JSON formatında döndür
  } catch (error) {
    res.status(400).json({ message: 'Invalid input' });
  }
});

// Kullanıcı güncelleme
router.put('/:id', async (req, res) => {
  const { first_name, lastname, age, gender, email, password, phone, address } =
    req.body;

  try {
    const user = await User.findByPk(req.params.id); // ID'ye göre kullanıcıyı bul
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.first_name = first_name || user.first_name;
    user.last_name = lastname || user.last_name;
    user.age = age || user.age;
    user.gender = gender || user.gender;
    user.email = email || user.email;
    user.password = password || user.password;
    user.phone = phone || user.phone;
    user.address = address || user.address;

    await user.save(); // Kullanıcıyı kaydet

    res.status(200).json(user); // Güncellenmiş kullanıcıyı JSON formatında döndür
  } catch (error) {
    res.status(400).json({ message: 'Invalid input' });
  }
});

// Kullanıcı silme
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id); // ID'ye göre kullanıcıyı bul
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy(); // Kullanıcıyı sil
    res.status(204).send(); // Silme işlemi başarılı, yanıt dönme
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
