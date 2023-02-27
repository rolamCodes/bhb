import React, { useState, useEffect } from "react";
import Nav from './components/Nav';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Nav />
      <div className='habit-name-container'>
        <p className='text-highlight'>Habit</p>
        <p className='text-habit big'>Habit name</p>
      </div>
      <div className='counters-container'>
        <Counter type='win' />
        <Counter type='lose' />
      </div>
    </>
  );
}

export default App;
