const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateToken } = require('../config/auth');

const userResolver = {
  Mutation: {
    loginUser: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found!');
      }
      const isEqual = await bcrypt.compare(password, user.password);
      if (!isEqual) {
        throw new Error('Password is incorrect!');
      }
      const token = generateToken(user);
      return { userId: user._id, token, tokenExpiration: 1 };
    },
  },
};

module.exports = userResolver;