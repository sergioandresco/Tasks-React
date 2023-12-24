import '../styles/TaskItem.css'

function TaskItem({ text, completed }){
    return(
  
      <li className="TaskItem">
  
        <span className={`Icon Icon-check ${completed && "Icon-check--activate"}`}>V</span>
  
        <p className={`TaskItem-p ${completed && "TaskItem-p--complete"}`}>{ text }</p>
  
        <span className="Icon Icon-delete">X</span>
  
      </li>
  
    );
}

export { TaskItem };
