// Structure for the book
// INPUT:
// {
//   "name": string,
//   "year": number,
//   "author": string,
//   "summary": string,
//   "publisher": string,
//   "pageCount": number,
//   "readPage": number,
//   "reading": boolean
// }

// SERVER SAVED AS:
// {
//   "id": "Qbax5Oy7L8WKf74l",
//   "name": "Buku A",
//   "year": 2010,
//   "author": "John Doe",
//   "summary": "Lorem ipsum dolor sit amet",
//   "publisher": "Dicoding Indonesia",
//   "pageCount": 100,
//   "readPage": 25,
//   "finished": false,
//   "reading": false,
//   "insertedAt": "2021-03-04T09:11:44.598Z",
//   "updatedAt": "2021-03-04T09:11:44.598Z"
// }

// GET LIST OF THE BOOKS
// {
//   "status": "success",
//   "data": {
//       "books": [
//           {
//               "id": "Qbax5Oy7L8WKf74l",
//               "name": "Buku A",
//               "publisher": "Dicoding Indonesia"
//           },
//           {
//               "id": "1L7ZtDUFeGs7VlEt",
//               "name": "Buku B",
//               "publisher": "Dicoding Indonesia"
//           },
//           {
//               "id": "K8DZbfI-t3LrY7lD",
//               "name": "Buku C",
//               "publisher": "Dicoding Indonesia"
//           }
//       ]
//   }
// }

// GET DETAIL OF BOOK
// {
//   "status": "success",
//   "data": {
//       "book": {
//           "id": "aWZBUW3JN_VBE-9I",
//           "name": "Buku A Revisi",
//           "year": 2011,
//           "author": "Jane Doe",
//           "summary": "Lorem Dolor sit Amet",
//           "publisher": "Dicoding",
//           "pageCount": 200,
//           "readPage": 26,
//           "finished": false,
//           "reading": false,
//           "insertedAt": "2021-03-05T06:14:28.930Z",
//           "updatedAt": "2021-03-05T06:14:30.718Z"
//       }
//   }
// }

const books = [];

module.exports = books;
