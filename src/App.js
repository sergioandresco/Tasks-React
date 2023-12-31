import { TaskCounter } from './components/TaskCounter';
import { TaskSearch } from './components/TaskSearch';
import { TaskList } from './components/TaskList';
import { TaskItem } from './components/TaskItem';
import { CreateTaskButton } from './components/CreateTaskButton';
import React from 'react';

const defaultTasks = [
  { text: 'This is a first test', completed: true },
  { text: 'This is a second test', completed: false },
  { text: 'This is a third test', completed: false },
  { text: 'This is a fourth test', completed: false},
  { text: 'This is a fiveth test', completed: true},
]

function App() {

  const [task, setTasks] = React.useState(defaultTasks);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTasks = task.filter(task => !!task.completed).length;

  const totalTasks = task.length;

  console.log('The users are search ' + searchValue);

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