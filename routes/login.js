const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post("/", async (req, res) => {
    try {
        const {email, password } = req.body;
        const user = await User.findOne({where:{ email }});
        if (!user) return res.status(400).json({ message: "Kullanıcı bulunamadı!" });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Şifre hatalı!" });
        const accessToken = jwt.sign({ 
            userId: user.getDataValue("id"),
            role: user.getDataValue("role")
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" });

        const refreshToken = jwt.sign({
            userId: user.getDataValue("id"),
            role: user.getDataValue("role")

        }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
        // Assigning refresh token in http-only cookie 
        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            sameSite: 'None', secure: false,//bu değeri true yaparsanız sadece https üzerinden erişilebilir olur!!!
            maxAge: 24 * 60 * 60 * 1000
        });
        return res.status(200).json({ accessToken });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Bir hata oluştu!" });
    }
});


module.exports = router;