import { TaskIcon } from './TaskIcon';
import React from "react";

function DeleteIcon(){
    return(
        <TaskIcon 
            type="delete"
            color="red"
        />
    )
}

export { DeleteIcon }