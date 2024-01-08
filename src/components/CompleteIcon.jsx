import { TaskIcon } from './TaskIcon';
import React from "react";

function CompleteIcon(){
    return(
        <TaskIcon 
            type="check"
            color="gray"
        />
    )
}

export { CompleteIcon }