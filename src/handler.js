const { nanoid } = require('nanoid');
const books = require('./books');
const ValidationError = require('./exc');

const addBookHandler = (request, h) => {
  let response;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt,
    updatedAt,
  };

  try {
    if (newBook.name === undefined) {
      throw new ValidationError("'name' is required", 'nama');
    }
    if (newBook.year === undefined) {
      throw new ValidationError("'year' is required", 'tahun');
    }
    if (newBook.author === undefined) {
      throw new ValidationError("'author' is required", 'penulis');
    }
    if (newBook.summary === undefined) {
      throw new ValidationError("'summary' is required", 'rangkuman');
    }
    if (newBook.publisher === undefined) {
      throw new ValidationError("'publisher' is required", 'penerbit');
    }
    if (newBook.pageCount === undefined) {
      throw new ValidationError("'pageCount' is required", 'pageCount');
    }
    if (newBook.readPage === undefined) {
      throw new ValidationError("'readPage' is required", 'readPage');
    }
    const isReadPageValid = (newBook.pageCount >= newBook.readPage);
    if (isReadPageValid) {
      books.push(newBook);
      response = h.response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id,
        },
      });
      response.code(201);
      return response;
    }

    response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
  } catch (err) {
    if (err instanceof ValidationError) {
      response = h.response({
        status: 'fail',
        message: `Gagal menambahkan buku. Mohon isi ${err.field} buku`,
      });
      response.code(400);
      return response;
    }
  }

  return response;
};

const getBooksHandler = (request, h) => {
  const { name: nameQ, reading, finished } = request.query;
  const list = [];

  books.forEach((book) => {
    const { id, name, publisher } = book;
    if (nameQ !== undefined) {
      const res = book.name.toLowerCase().indexOf(nameQ.toLowerCase());
      if (res >= 0) return list.push({ id, name, publisher });
    }
    if (reading !== undefined) {
      if (book.reading == reading) {
        return list.push({ id, name, publisher });
      }
    }
    if (finished !== undefined) {
      if (book.finished == finished) {
        return list.push({ id, name, publisher });
      }
    }
    if (nameQ === undefined && reading === undefined && finished === undefined) {
      return list.push({ id, name, publisher });
    }
    return list;
  });
  const response = h.response({
    status: 'success',
    data: {
      books: list,
    },
  });
  response.code(200);
  return response;
};

const getDetailBookHandler = (request, h) => {
  const { bookId } = request.params;

  const book = books.filter((x) => x.id === bookId)[0];

  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

const updateBookHandler = (request, h) => {
  const { bookId } = request.params;

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const updatedAt = new Date().toISOString();

  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    try {
      if (books[index].name === undefined) {
        throw new ValidationError("'name' is required", 'nama');
      }
      if (books[index].year === undefined) {
        throw new ValidationError("'year' is required", 'tahun');
      }
      if (books[index].author === undefined) {
        throw new ValidationError("'author' is required", 'penulis');
      }
      if (books[index].summary === undefined) {
        throw new ValidationError("'summary' is required", 'rangkuman');
      }
      if (books[index].publisher === undefined) {
        throw new ValidationError("'publisher' is required", 'penerbit');
      }
      if (books[index].pageCount === undefined) {
        throw new ValidationError("'pageCount' is required", 'pageCount');
      }
      if (books[index].readPage === undefined) {
        throw new ValidationError("'readPage' is required", 'readPage');
      }
      const isReadPageValid = (books[index].pageCount >= books[index].readPage);
      if (isReadPageValid) {
        const response = h.response({
          status: 'success',
          message: 'Buku berhasil diperbarui',
        });
        response.code(200);
        return response;
      }
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      });
      response.code(400);
      return response;
    } catch (err) {
      if (err instanceof ValidationError) {
        const response = h.response({
          status: 'fail',
          message: `Gagal memperbarui buku. Mohon isi ${err.field} buku`,
        });
        response.code(400);
        return response;
      }
    }
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const deleteBookHandler = (request, h) => {
  const { bookId } = request.params;

  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addBookHandler,
  getBooksHandler,
  getDetailBookHandler,
  updateBookHandler,
  deleteBookHandler,
};
