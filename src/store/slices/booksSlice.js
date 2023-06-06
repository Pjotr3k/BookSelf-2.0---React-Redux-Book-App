import { createSlice, nanoid } from '@reduxjs/toolkit';

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        booksList: [{ Id: '0', Title: 'Harry Potter', Author: 'JK Rowling', Rating: 0 }, { Id: '13', Title: 'Buf-e Kur', Author: 'Hedayat', Rating: 6 }]
    },
    reducers: {
        addBook(state, action) {
            state.booksList.push({
                Id: nanoid(),
                Title: action.payload.Title,
                Author: action.payload.Author,
                Rating: action.payload.Rating
            })
        },

        modifyBook(state, action) {
            state.booksList = state.booksList.map((book) => {
                if (book.Id === action.payload.Id)
                    return action.payload;

                return book;
            });
        },

        deleteBook(state, action) {
            state.booksList = state.booksList.filter(book => {
                return book.Id !== action.payload
            })
        }

    }
});

export const { getBook, addBook, modifyBook, deleteBook } = booksSlice.actions;
export const booksReducer = booksSlice.reducer
