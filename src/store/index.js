import { configureStore } from '@reduxjs/toolkit';
import { booksReducer, getBook, addBook, modifyBook, deleteBook } from './slices/booksSlice';
import { openForm, closeForm, changeTitle, changeAuthor, changeRating, bookEditReducer } from './slices/bookEditSlice';

const store = configureStore({
    reducer: {
        books: booksReducer,
        bookEdit: bookEditReducer
    }
})

export { store, getBook, addBook, modifyBook, deleteBook, openForm, closeForm, changeTitle, changeAuthor, changeRating }