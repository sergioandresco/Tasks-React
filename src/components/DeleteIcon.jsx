import { TaskIcon } from './TaskIcon';
import React from "react";

function DeleteIcon({ onDelete }){
    return(
        <TaskIcon 
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    )
}

export { DeleteIcon }