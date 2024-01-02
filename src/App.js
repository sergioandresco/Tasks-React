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

  const searchedTasks = task.filter(
    (task) => {
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return taskText.includes(searchText);
    }
  );

  const completeTask = (text) => {
    const newTasks = [...task];
    const taskIndex = newTasks.findIndex(
      (task) => task.text === text
    );
    newTasks[taskIndex].completed = true;
    setTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...task];
    const taskIndex = newTasks.findIndex(
      (task) => task.text === text
    );
    newTasks.splice(taskIndex, 1)
    setTasks(newTasks);
  };

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

export default App;