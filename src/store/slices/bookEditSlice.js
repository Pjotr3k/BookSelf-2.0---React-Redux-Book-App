import { createSlice } from '@reduxjs/toolkit';
import { addBook, modifyBook } from './booksSlice'
const bookEditSlice = createSlice({
    name: 'bookEdit',
    initialState: {
        IsOpen: false,
        IsEdit: false,
        Id: '',
        Title: '',
        Author: '',
        Rating: 5,
        Error: ''
    },
    reducers: {
        openForm(state, action) {
            state.IsOpen = true;
            state.IsEdit = action.payload.IsEdit;

            if (state.IsEdit) {
                console.log('Edytuje');

                state.Id = action.payload.book.Id;
                state.Title = action.payload.book.Title;
                state.Author = action.payload.book.Author;
                state.Rating = action.payload.book.Rating;
                state.Error = action.payload.Error;
            }

            else {
                console.log('Dodaje');

                state.Id = '';
                state.Title = '';
                state.Author = '';
                state.Rating = 5;
            }
        },

        closeForm(state, action) {
            state.IsOpen = false;
        },

        changeTitle(state, action) {
            state.Title = action.payload;
        },

        changeAuthor(state, action) {
            state.Author = action.payload;
        },

        changeRating(state, action) {
            state.Rating = action.payload;
        },

        
    },
    extraReducers(builder) {
        builder.addCase(addBook, (state, action) => {
            state.Id = '';
            state.Title = '';
            state.Author = '';
            state.Rating = 5;
        });

        builder.addCase(modifyBook, (state, action) => {
            state.Id = '';
            state.Title = '';
            state.Author = '';
            state.Rating = 5;
        });
    }
});

export const { openForm, closeForm, changeTitle, changeAuthor, changeRating } = bookEditSlice.actions;
export const bookEditReducer = bookEditSlice.reducer
