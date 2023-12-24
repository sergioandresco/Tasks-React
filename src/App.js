import { TaskCounter } from './components/TaskCounter';
import { TaskSearch } from './components/TaskSearch';
import { TaskList } from './components/TaskList';
import { TaskItem } from './components/TaskItem';
import { CreateTaskButton } from './components/CreateTaskButton';

const defaultTasks = [
  { text: 'This is a first test', completed: true },
  { text: 'This is a second test', completed: false },
  { text: 'This is a third test', completed: false },
  { text: 'This is a fourth test', completed: true },

]

function App() {
  return (
    <>
    
      <TaskCounter total = {5} completed = {2} />
      <TaskSearch />

      <TaskList>

        {
          defaultTasks.map(tasks => (
            <TaskItem 
              key={tasks.text}
              text={tasks.text}
              completed={tasks.completed}
            />
          ))
        }
      
      </TaskList> 

      <CreateTaskButton />

    </>
  );
}

export default App;