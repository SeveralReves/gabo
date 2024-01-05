// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero'
import Cards3d from './components/Cards3d'
import './App.scss'
function App() {
  // const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);
  // const [newTask, setNewTask] = useState('');

  // const addTask = () => {
    // if (newTask.trim() !== '') {
    //   setTasks([...tasks, newTask]);
    //   setNewTask('');
    // }
  // };

  return (
    <div className='main'>
      <Header></Header>
      <Hero></Hero>
      <Cards3d></Cards3d>
    </div>
  );
}

export default App;
