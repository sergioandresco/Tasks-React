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

        <CompleteIcon />
  
        <p className={`TaskItem-p ${completed && "TaskItem-p--complete"}`}>{ text }</p>
  
        {/* <span 
          className="Icon Icon-delete"
          onClick={onDelete}
        >X</span> */}

        <DeleteIcon />
  
      </li>
  
    );
}

export { TaskItem };
