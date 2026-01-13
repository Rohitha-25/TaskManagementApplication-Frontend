import React from 'react'
import TaskList from './components/TaskList'
import './App.css'

const App = () => {
  return (
    <div className='container' style={{textAlign: 'center'}}>
      <h2>Task Management Application</h2>
      <TaskList/>
    </div>
  );
};

export default App;