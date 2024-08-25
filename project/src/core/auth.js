const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, 'your_jwt_secret_key', { expiresIn: '10m' });
};

const verifyToken = (token) => {
    return jwt.verify(token, 'your_jwt_secret_key');
};

module.exports = {
    generateToken,
    verifyToken,
};
