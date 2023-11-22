// const isBookValid = (newBook, books) => {
//   try {
//     if (newBook.name === undefined) {
//       throw new ValidationError("'name' is required", 'nama');
//     }
//     if (newBook.year === undefined) {
//       throw new ValidationError("'year' is required", 'tahun');
//     }
//     if (newBook.author === undefined) {
//       throw new ValidationError("'author' is required", 'penulis');
//     }
//     if (newBook.summary === undefined) {
//       throw new ValidationError("'summary' is required", 'rangkuman');
//     }
//     if (newBook.publisher === undefined) {
//       throw new ValidationError("'publisher' is required", 'penerbit');
//     }
//     if (newBook.pageCount === undefined) {
//       throw new ValidationError("'pageCount' is required", 'pageCount');
//     }
//     if (newBook.readPage === undefined) {
//       throw new ValidationError("'readPage' is required", 'readPage');
//     }
//     const isReadPageValid = (newBook.pageCount >= newBook.readPage);
//     if (isReadPageValid) {
//       books.push(newBook);
//       response = h.response({
//         status: 'success',
//         message: 'Buku berhasil ditambahkan',
//         data: {
//           bookId: id,
//         },
//       });
//       response.code(201);
//       return response;
//     }

//     response = h.response({
//       status: 'fail',
//       message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
//     });
//     response.code(400);
//   } catch (err) {
//     if (err instanceof ValidationError) {
//       response = h.response({
//         status: 'fail',
//         message: `Gagal menambahkan buku. Mohon isi ${err.field} buku`,
//       });
//       response.code(400);
//       return response;
//     }
//   }
// }

// module.exports = isBookValid;
