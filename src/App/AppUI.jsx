import { TaskCounter } from '../components/TaskCounter';
import { TaskSearch } from '../components/TaskSearch';
import { TaskList } from '../components/TaskList';
import { TaskItem } from '../components/TaskItem';
import { CreateTaskButton } from '../components/CreateTaskButton';

function AppUI({
    totalTasks,
    completedTasks,
    searchValue,
    setSearchValue,
    searchedTasks,
    completeTask,
    deleteTask,
}){
    return (
        <>
        
          <TaskCounter 
            total = {totalTasks} 
            completed = {completedTasks} 
          />
          <TaskSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TaskList>
    
            {
              searchedTasks.map((task) => (
                <TaskItem 
                  key={task.text}
                  text={task.text}
                  completed={task.completed}
                  onComplete={() => completeTask(task.text)}
                  onDelete={() => deleteTask(task.text)}
                />
              ))
            }
          
          </TaskList> 
    
          <CreateTaskButton />
    
        </>
    );
}

export { AppUI };