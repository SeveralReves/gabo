// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero'
import Cards3d from './components/Cards3d'
import MyProyects from './components/MyProyects'
import './App.scss'

function App() {

  return (
    <div className='main'>
      <Header></Header>
      <Hero></Hero>
      <Cards3d></Cards3d>
      <MyProyects></MyProyects>
    </div>
  );
}

export default App;
