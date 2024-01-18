import React from "react";
import './EmptyTasks.css'

function EmptyTasks(){
    return(
        <div className="typewriter">
            <div className="slide"><i></i></div>
            <div className="paper"></div>
            <div className="keyboard"></div>
            <span>Add a new task</span>
        </div>
    )
}

export { EmptyTasks }