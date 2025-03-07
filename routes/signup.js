const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//kullanıcı kayıt işlemi
router.post('/', async (req, res) => {
    try {
        const { first_name,last_name,email, password } = req.body;
        // e-posta kontrolü
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'kullanıcı zaten kayıtlı' });
        }
        
        
        //şifre hashleme işlemi
        const hashedPassword = await bcrypt.hashSync(password, 10);
        //kullanıcı oluşturma
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