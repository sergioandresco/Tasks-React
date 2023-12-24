import '../styles/TaskCounter.css'

function TaskCounter({ total, completed }){

    return(

        <h1 className="message_task">
            You are completed { completed } of { total } Tasks
        </h1>

    );

}

export { TaskCounter };