import { TaskProvider } from '../components/TaskContext';
import { AppUI } from './AppUI';
import React from 'react';

function App() {
  return(
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  )
}

export default App;