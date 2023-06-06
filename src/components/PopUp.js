import { createPortal } from 'react-dom';

function PopUp({ children, onClose }) {

    const handleClose = (event) => {
        onClose()
    }


    return createPortal(<div>
        <div onClick={handleClose} className="popupBg">

        </div>
        <div className="popup">
            <div>
                <button onClick={handleClose}>X</button>
                {children}
            </div>
        </div>
    </div>,
        document.querySelector('.pop-up-area')
    )
}

export default PopUp;