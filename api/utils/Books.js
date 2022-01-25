import db from "../db/models";

export default class Books {
  constructor(props) {
    this.props = props;
    this.createBook = this.createBook.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  async createBook() {
    try {
      const newBook = await db.books.create({ ...this.props });
      return newBook;
    } catch (error) {
      throw error;
    }
  }

  async getBooks() {
    try {
      const books = await db.books.findAll();
      return books;
    } catch (error) {
      throw error;
    }
  }

  async updateBook() {
    try {
      //prettier-ignore
      const updatedBook = await db.books.update({ ...this.props.payload }, { where: {...this.props.where} })
      return updatedBook;
    } catch (error) {
      throw error;
    }
  }

  async deleteBook() {
    try {
      //prettier-ignore
      const deletedBook = await db.books.destroy({where: { ...this.props.where }});
      return deletedBook;
    } catch (error) {
      throw error;
    }
  }
}
