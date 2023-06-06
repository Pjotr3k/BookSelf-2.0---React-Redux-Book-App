function ConfirmPopUp({ children }) {

    const handleButtonClick = (event) => {

    }


    return <div className="popup">
        <div>
            <button>X</button>
            {children}
        </div>
    </div>
}

export default ConfirmPopUp;