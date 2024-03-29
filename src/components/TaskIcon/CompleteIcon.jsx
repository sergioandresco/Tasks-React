import { TaskIcon } from './index';
import React from "react";

function CompleteIcon({ completed, onComplete }){
    return(
        <TaskIcon 
            type="check"
            color={ completed ? 'green' : 'gray' }
            onClick={onComplete}
        />
    )
}

export { CompleteIcon }