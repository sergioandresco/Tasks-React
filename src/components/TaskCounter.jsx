import '../styles/TaskCounter.css'

function TaskCounter({ total, completed }){

    return(

        //este operador ternario es para decir si todos los task estan completados, saque el mensaje de completado, si no, siga con el conteo de los tasks
        completed === total ?
        
        <h1 className="message_task"> <strong>Congratulations, you are completed the all tasks</strong></h1>

        :

        <h1 className="message_task">
            You are completed <span>{ completed }</span> of <span>{ total }</span> Tasks
        </h1>

    );

}

export { TaskCounter };