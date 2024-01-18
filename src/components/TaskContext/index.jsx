import React from "react";
import { useLocalStorage } from '../../hooks/useLocalStorage';

const TaskContext = React.createContext();

function TaskProvider({ children }){

    const {
        item: task, 
        saveItem: saveTasks,
        loading,
        error,
      } = useLocalStorage('TASKS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTasks = task.filter(task => !!task.completed).length;
    
      const totalTasks = task.length;
    
      const searchedTasks = task.filter(
        (task) => {
          const taskText = task.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
    
          return taskText.includes(searchText);
        }
      );

      const addTask = (text) => {
        const newTasks = [...task];
        newTasks.push({
          text,
          completed: false
        });
        saveTasks(newTasks);
      }
    
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
        <TaskContext.Provider value={{
            loading,
            error,
            totalTasks,
            addTask,
            completedTasks,
            searchValue,
            setSearchValue,
            searchedTasks,
            completeTask,
            deleteTask,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider }