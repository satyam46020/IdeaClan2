const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateToken } = require('../config/auth');

const userResolver = {
  Mutation: {
    signup: async (_, { username, email, password, role }) => {
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error('User already exists with this email.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
          username,
          email,
          password: hashedPassword,
          role
        });

        await newUser.save();

        const token = generateToken(newUser);

        return {
          ...newUser.toObject(),
          token,
        };
      } catch (error) {
        throw new Error('Signup failed. Please try again.'); // Handle error
      }
    },

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