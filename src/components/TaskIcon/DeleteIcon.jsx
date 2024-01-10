import { TaskIcon } from './index';
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