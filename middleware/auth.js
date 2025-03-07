const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Yetkisiz erişim!" });

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""),"SECRET_KEY");   
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Geçersiz token!" });
    }
};
// Yetkilendirme: sadece admin erişimi
const authAdmin = (req, res, next) => {
    auth(req, res, () => {});
    if (req.user.role !== 'Admin') {
        return res.status(403).json({ message: `Bu işlem için admin yetkisi gerekli! Senin rolün:${req.user.role}` });
    }
    next();
};

module.exports = {auth,authAdmin};
