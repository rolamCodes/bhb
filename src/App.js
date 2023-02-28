import React, { useState, useEffect } from "react";
import Nav from './components/Nav';
import Counter from './components/Counter';
import Menu from "./components/Menu";

function App() {
  const [wPoints, setWPoints] = useState([]);
  const [lPoints, setLPoints] = useState([]);

  const handleNewPoint = (pointType) => {
    if (pointType === 'Won') {
      const arr = [...wPoints];
      arr.push(1);
      setWPoints(arr);
    } else {
      const arr = [...lPoints];
      arr.push(1);
      setLPoints(arr);
    }
  }

  return (
    <div className='app'>
      <Nav />
      <div className='main-container'>
        <div>
          <p className='text-highlight'>Habit</p>
          <p className='text-habit big'>Leaving the fridge open</p>
        </div>
        <div className='counters-container'>
          <Counter type='Won' points={wPoints} onNewPoint={handleNewPoint} />
          <div className='divider'></div>
          <Counter type='Lost' points={lPoints} onNewPoint={handleNewPoint} />
        </div>
      </div>
    </div>
  );
}

export default App;
