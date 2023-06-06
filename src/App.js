import PopUp from './components/PopUp';
import Display from "./components/Display";
import Edit from './components/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { openForm, closeForm } from './store/index';
import "./Style.css"

function App() {
    const dispatch = useDispatch();
    const editOpen = useSelector((state) => {
        return state.bookEdit.IsOpen;
    });

    const clickAddHandler = () => {
        dispatch(
            openForm({
                IsEdit: false
            })
        )
    }

    const closeEditHandler = () => {
        dispatch(
            closeForm()
        )
    }

    return <div>        
        <Display />
        {editOpen && <PopUp onClose={closeEditHandler}>
            <Edit/>
        </PopUp>}
            <button onClick={clickAddHandler}>Add New Book</button>        
        </div>;
}

export default App;