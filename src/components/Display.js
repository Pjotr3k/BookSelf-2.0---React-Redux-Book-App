import React from 'react';
import BookCard from './BookCard';
import { useSelector } from 'react-redux';

function Display() {
    const BookCards = 
        useSelector((state) => {
        return state.books.booksList;
    })

    const CardItems = BookCards.map((card) =>
        <BookCard key={card.Id} id={card.Id}/>
    );

  return (
      <div>{CardItems}</div>
  );
}

export default Display;