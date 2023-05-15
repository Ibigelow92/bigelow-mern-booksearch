const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Query {
    me: User
    SavedBooks: [Book]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: BookInput): User
    removeBook:(bookId: String!): User
  }

  type User {
      _id: ID!
      username: String
      email: String
      bookCount: Int
      savedBooks: [Book]
      password: String
  }

  type Book {
    bookId: Id!
    authors: [String]
    description: String
    title: String
    Image: String
    Link: String
  }

  type Auth {
    token: ID!
    user: User
  }

`;

module.exports = typeDefs;

// * `typeDefs.js`: Define the necessary `Query` and `Mutation` types:
// 	<!-- DONE? -->
// 		* `Query` type:

// 			* `me`: Which returns a `User` type.
		
// 		* `Mutation` type:

// 			* `login`: Accepts an email and password as parameters; returns an `Auth` type.

// 			* `addUser`: Accepts a username, email, and password as parameters; returns an `Auth` type.

// 			* `saveBook`: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)

// 			* `removeBook`: Accepts a book's `bookId` as a parameter; returns a `User` type.
			
// 		* `User` type:

// 			* `_id`

// 			* `username`

// 			* `email`

// 			* `bookCount`

// 			* `savedBooks` (This will be an array of the `Book` type.)

// 		* `Book` type:

// 			* `bookId` (Not the `_id`, but the book's `id` value returned from Google's Book API.)

// 			* `authors` (An array of strings, as there may be more than one author.)

// 			* `description`

// 			* `title`

// 			* `image`

// 			* `link`

// 		* `Auth` type:

// 			* `token`

// 			* `user` (References the `User` type.)