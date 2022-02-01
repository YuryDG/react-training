import { Book, NewBook } from "../types";

export const isBook = (book: Book | NewBook): book is Book => (book as Book).id !== undefined;