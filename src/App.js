import React, { useState, useEffect } from "react";
import Nav from './components/Nav';
import Counter from './components/Counter';
import Menu from "./components/Menu";

function App() {
  return (
    <div className='app'>
      <Nav />
      <div className='main-container'>
        <div>
          <p className='text-highlight'>Habit</p>
          <p className='text-habit big'>Leaving the fridge open</p>
        </div>
        <div className='counters-container'>
          <Counter type='Won' points={[1, 2, 3, 4]} />
          <div className='divider'></div>
          <Counter type='Lost' points={[1]} />
        </div>
      </div>
    </div>
  );
}

export default App;
