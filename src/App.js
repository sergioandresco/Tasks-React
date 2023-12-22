import { TaskCounter } from './components/TaskCounter';
import { TaskSearch } from './components/TaskSearch';
import { TaskList } from './components/TaskList';
import { TaskItem } from './components/TaskItem';
import { CreateTaskButton } from './components/CreateTaskButton';
import './App.css';
import React from 'react';

const defaultTasks = [
  { text: 'This is a first test', completed: true },
  { text: 'This is a second test', completed: false },
  { text: 'This is a third test', completed: false },
  { text: 'This is a fourth test', completed: true },

]

function App() {
  return (
    <React.Fragment>
    
      <TaskCounter />
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

    </React.Fragment>
  );
}

export default App;