import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, modifyBook, changeTitle, changeAuthor, changeRating, closeForm } from '../store/index';

function Edit() {
    const dispatch = useDispatch();
    const { ADD, EDIT, CANCEL } = { ADD: 'add', EDIT: 'edit', CANCEL: 'cancel' };
    const { IsEdit, Id, Title, Author, Rating, Error } = useSelector(state => state.bookEdit);
    
    

    const handleClick = (event) => {
        event.preventDefault();

        console.log(event.target)

        switch (event.target.value) {
            case ADD: dispatch(addBook({
                Title, Author, Rating
            })); break;

            case EDIT: dispatch(modifyBook({
                Id, Title, Author, Rating
            })); break;

            //case CANCEL: dispatch(closeForm()); break;
        }

        dispatch(closeForm());

        
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case ('Title'): dispatch(changeTitle(event.target.value)); break;
            case ('Author'): dispatch(changeAuthor(event.target.value)); break;
            case ('Rating'): dispatch(changeRating(event.target.value)); break;
        }
    }

    return (<div>
        <form>
            {IsEdit ? <h5>Edit {Title}</h5> : < h5 > Enter new book</h5>}
            <span>{Error}</span>            
            <label>title</label><input onChange={handleChange} value={Title} name='Title'></input>
            <label>author</label><input onChange={handleChange} value={Author} name='Author'></input>
            <label>rating</label><input type='range' min={1} max={10} onChange={handleChange} value={Rating} name='Rating'></input>
            <button type="submit" onClick={handleClick} value={IsEdit ? EDIT : ADD}>Submit</button>
            <button onClick={handleClick} value={ CANCEL } >Cancel</button>
            
            </form>
        </div>
  );
}

export default Edit;