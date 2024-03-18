# IdeaClan
# Library Management System

## Introduction
This project is a backend application developed with Node.js and GraphQL for managing books and users, along with authentication functionalities.


## Live Links
**Backend:** https://ideaclan2-1.onrender.com
<br>

## Credentials
**email -** satyam46020@gmail.com  
**password -** 123

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- GraphQL
- Apollo Server
- JWT for Authentication

## Installation
Follow the steps:

1. Clone the repository.

```bash
https://github.com/satyam46020/IdeaClan2.git
```

2. Install the dependencies using.

```bash
npm install
```

3. Start the application by running.

```bash
npm run dev
```

### Mutations
- `signup(username, email, password, role)`: Register a new user
- `loginUser(email, password)`: Login a user
- `addBook(title, author, genre)`: Add a new book (Admin only)


## File Structure

├── config/
├──├── auth.js
├──├── db.js
├── models/
├──├── Book.js
├──├── User.js
├── resolvers/
├──├──bookResolver.js
├──├──resolvers.js
├──├──userResolver.js
├── schemas/
├──├──schema.graphql
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md


## Important links:

**Portfolio:** https://satyam46020.github.io

**Github:** https://github.com/satyam46020

