const jwt = require('jsonwebtoken');

const createRefreshToken = (req, res) => {
  if (req.cookies?.jwt) {
    // Destructuring refreshToken from cookie
    const refreshToken = req.cookies.jwt;

    // Verifying refresh token
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          // Wrong Refesh Token
          return res.status(406).json({ message: 'Unauthorized' });
        } else {
          // Correct token we send a new access token
          const accessToken = jwt.sign(
            {
              userId: decoded.userId,
              role: decoded.role,
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
              expiresIn: '10m',
            }
          );
          return res.json({ accessToken });
        }
      }
    );
  } else {
    return res.status(406).json({ message: 'Unauthorized' });
  }
};

module.exports = { createRefreshToken };
