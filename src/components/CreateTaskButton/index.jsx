import '../../styles/CreateTaskButton.css'

function CreateTaskButton(){
    return(
        <button className="CreateTaskButton" onClick={()=>console.log('you clicked')}>+</button>
    )
}

export { CreateTaskButton };