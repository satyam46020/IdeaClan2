const Book = require('../models/Book');
const User=require("../models/User")

const bookResolver = {
  Query: {
    books: async () => {
      return await Book.find();
    },
  },
  Mutation: {
    addBook: async (_, { title, author, genre }, context) => {
      if (!context.user) {
        throw new Error('Authentication required to add a book.');
      }

      const user = await User.findById(context.user.userId);
      if (!user || user.role !== 'admin') {
        throw new Error('Only admin can add books.');
      }

      const newBook = new Book({ title, author, genre, owner: user._id });
      await newBook.save();
      return newBook;
    },
  },
};

module.exports = bookResolver;
