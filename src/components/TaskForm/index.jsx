import React from "react";
import {TaskContext} from '../TaskContext'
import './TaskForm.css';

function TaskForm(){
    const {
        addTask,
        setOpenModal,
    } = React.useContext(TaskContext);

    const [newTaskValue, setNewTaskValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false)
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTaskValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Write a new task</label>
            <textarea 
                placeholder="Enter the text"
                value={newTaskValue}
                onChange={onChange}
            />

            <div className="TaskForm-buttonContainer">

                <button 
                    type="submit"
                    className="btn"><i className="animation"
                >
                    </i>Add<i className="animation"></i>
                </button>

                <button 
                    type="button"
                    className="btn"
                    onClick={onCancel}
                >
                    <i className="animation">
                    </i>Cancel<i className="animation"></i>
                </button>
            </div>
            
        </form>
    )
}

export { TaskForm }