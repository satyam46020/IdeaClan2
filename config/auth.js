const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
      email: user.email,
      role: user.role,
    },
    'ideaclan',
    {
      expiresIn: '1h',
    }
  );
};

module.exports = {
  generateToken,
};
