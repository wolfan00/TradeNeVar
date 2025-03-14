const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    try {
        const { first_name,last_name,email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'kullanıcı zaten kayıtlı' });
        }
        
        const hashedPassword = await bcrypt.hashSync(password, 10);

        const newUser = await User.create({
            first_name: first_name,
            last_name: last_name,
            email:email,
            password: hashedPassword,
        });
        res.status(201).json("Kullanıcı oluşturuldu.");
    } catch (error) {
        res.status(500).json({ message: 'Server error' }+error);
    }
});

module.exports = router;