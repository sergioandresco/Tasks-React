import { TaskCounter } from '../components/TaskCounter';
import { TaskSearch } from '../components/TaskSearch';
import { TaskList } from '../components/TaskList';
import { TaskItem } from '../components/TaskItem';
import { TasksLoading } from '../components/TasksLoading';
import { TasksError } from '../components/TasksError';
import { EmptyTasks } from '../components/EmptyTasks';
import { CreateTaskButton } from '../components/CreateTaskButton';
import { TaskContext } from '../components/TaskContext';


function AppUI(){
    return (
        <>
        
          <TaskCounter />
          <TaskSearch />

          <TaskContext.Consumer>
            {({
              loading,
              error,
              searchedTasks,
              completeTask,
              deleteTask
            }) => (
              <TaskList>

                {loading && <TasksLoading />}
                {error && <TasksError />}
                {(!loading && searchedTasks.length === 0) && <EmptyTasks />}

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
            )}
          </TaskContext.Consumer>
    
          <CreateTaskButton />
    
        </>
    );
}

export { AppUI };