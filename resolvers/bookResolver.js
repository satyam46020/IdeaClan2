const Book = require('../models/Book');

const bookResolver = {
  Query: {
    books: async () => {
      return await Book.find();
    },
  },
  Mutation: {
    addBook: async (_, { title, author, genre }) => {
      const newBook = new Book({ title, author, genre });
      await newBook.save();
      return newBook;
    },
  },
};

module.exports = bookResolver;
