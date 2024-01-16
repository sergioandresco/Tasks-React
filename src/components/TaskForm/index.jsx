import React from "react";
import './TaskForm.css';

function TaskForm(){
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Write a new task</label>
            <textarea 
                placeholder="Enter the text"
            />

            <div className="TaskForm-buttonContainer">
                <button 
                    type="submit"
                    class="btn"><i class="animation"
                >
                    </i>Add<i class="animation"></i>
                </button>
                <button 
                    type=""
                    class="btn"><i class="animation"
                >
                    </i>Cancel<i class="animation"></i>
                </button>
            </div>
            
        </form>
    )
}

export { TaskForm }