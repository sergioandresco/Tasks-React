import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
import '../styles/TaskItem.css'

function TaskItem({ text, completed, onComplete, onDelete }){
    return(
  
      <li className="TaskItem">
  
        {/* <span 
          className={`Icon Icon-check ${completed && "Icon-check--activate"}`}
          onClick={onComplete}
        >V</span> */}

        <CompleteIcon 
          completed={completed}
          onComplete={onComplete} 
        />
  
        <p className={`TaskItem-p ${completed && "TaskItem-p--complete"}`}>{ text }</p>
  
        {/* <span 
          className="Icon Icon-delete"
          onClick={onDelete}
        >X</span> */}

        <DeleteIcon 
          onDelete={onDelete}
        />
  
      </li>
  
    );
}

export { TaskItem };
