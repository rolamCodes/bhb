import React, { useState, useEffect } from "react";
import Nav from './components/Nav';
import Counter from './components/Counter';
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Nav />
      <div className='main-container'>
        <div>
          <p className='text-highlight'>Habit</p>
          <p className='text-habit big'>Leaving the fridge open</p>
        </div>
        <div className='counters-container'>
          <Counter type='win' />
          <Counter type='lose' />
        </div>
        <Menu />
      </div>
    </>
  );
}

export default App;
