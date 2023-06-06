import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openForm, deleteBook } from '../store/index';

function BookCard({ id }) {   
    const dispatch = useDispatch();
    const book = useSelector(({ books: { booksList } }) => {
        const book = booksList.find(b => { return b.Id === id });
        return book;
    })

    const { EDIT, DELETE } = { EDIT: 'edit', DELETE: 'delete'};

    //console.log(book);

    const handleButtonClick = (event) => {
        switch (event.target.value) {
            case DELETE: dispatch(deleteBook(id)); break;
            case EDIT: dispatch(openForm({ book: book, IsEdit: true })); break;
        }
            
    }

  return (
      <div key = {id}>
          <ul>
              <li>{book.Title}</li>
              <li>{book.Author}</li>
              <li>{book.Rating}</li>
          </ul>
          <button onClick={handleButtonClick} value={EDIT} >Edit</button>
          <button onClick={handleButtonClick} value={DELETE} >Delete</button>          
      </div>      
      );

}

export default BookCard;