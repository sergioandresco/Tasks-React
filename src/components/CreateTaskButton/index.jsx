import '../../styles/CreateTaskButton.css'

function CreateTaskButton({ setOpenModal }){
    const handleClick = () => {
        setOpenModal((state) => !state);
    };

    return(
        <button 
            className="CreateTaskButton" 
            onClick={handleClick}
        >
                +
        </button>
    )
}

export { CreateTaskButton };