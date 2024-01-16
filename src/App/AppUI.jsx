import React from 'react';
import { TaskCounter } from '../components/TaskCounter';
import { TaskSearch } from '../components/TaskSearch';
import { TaskList } from '../components/TaskList';
import { TaskItem } from '../components/TaskItem';
import { TasksLoading } from '../components/TasksLoading';
import { TasksError } from '../components/TasksError';
import { EmptyTasks } from '../components/EmptyTasks';
import { CreateTaskButton } from '../components/CreateTaskButton';
import { Modal } from '../components/Modal'
import { TaskContext } from '../components/TaskContext';
import { TaskForm } from '../components/TaskForm';


function AppUI(){

  const {
    loading,
    error,
    searchedTasks,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
  } = React.useContext(TaskContext);

    return (
        <>
        
          <TaskCounter />
          <TaskSearch />

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
    
          <CreateTaskButton 
            setOpenModal={setOpenModal}
          />

          {openModal && (
            <Modal>
              <TaskForm />
            </Modal>
          )}
    
        </>
    );
}

export { AppUI };