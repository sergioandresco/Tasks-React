import { TaskCounter } from './components/TaskCounter';
import { TaskSearch } from './components/TaskSearch';
import { TaskList } from './components/TaskList';
import { TaskItem } from './components/TaskItem';
import { CreateTaskButton } from './components/CreateTaskButton';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <TaskCounter />
      <TaskSearch />

      <TaskList>

        <TaskItem />
      
      </TaskList> 

      <CreateTaskButton />

    </div>
  );
}

export default App;