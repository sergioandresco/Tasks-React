import React from 'react';
import '../../styles/TaskCounter.css'
import { TaskContext } from '../TaskContext';

function TaskCounter(){

    const {
        totalTasks,
        completedTasks,
    } = React.useContext(TaskContext);

    return(

        //este operador ternario es para decir si todos los task estan completados, saque el mensaje de completado, si no, siga con el conteo de los tasks
        completedTasks === totalTasks ?
        
        <h1 className="message_task"> <strong>Congratulations, you are completed the all tasks</strong></h1>

        :

        <h1 className="message_task">
            You are completed <span>{ completedTasks }</span> of <span>{ totalTasks }</span> Tasks
        </h1>

    );

}

export { TaskCounter };