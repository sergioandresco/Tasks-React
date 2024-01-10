import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppUI } from './AppUI';
import React from 'react';

// const defaultTasks = [
//   { text: 'This is a first test', completed: true },
//   { text: 'This is a second test', completed: false },
//   { text: 'This is a third test', completed: false },
//   { text: 'This is a fourth test', completed: false},
//   { text: 'This is a fiveth test', completed: true},
// ]

// localStorage.setItem('TASKS_V1', JSON.stringify(defaultTasks));
// localStorage.removeItem('TASKS_V1');

function App() {

  const [task, saveTasks] = useLocalStorage('TASKS_V1', []);

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
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...task];
    const taskIndex = newTasks.findIndex(
      (task) => task.text === text
    );
    newTasks.splice(taskIndex, 1)
    saveTasks(newTasks);
  };

  return(
    <AppUI 
      totalTasks={totalTasks}
      completedTasks={completedTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTasks={searchedTasks}
      completeTask={completeTask}
      deleteTask={deleteTask}
    />
  )
}

export default App;