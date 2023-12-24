import '../styles/TaskCounter.css'

function TaskCounter({ total, completed }){

    return(

        <h1 className="message_task">
            You are completed <span>{ completed }</span> of <span>{ total }</span> Tasks
        </h1>

    );

}

export { TaskCounter };