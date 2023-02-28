import React, { useState, useEffect } from "react";
import Nav from './components/Nav';
import Counter from './components/Counter';
import Menu from "./components/Menu";

function App() {
  const [wPoints, setWPoints] = useState([]);
  const [lPoints, setLPoints] = useState([]);
  const [habitName, setHabitName] = useState('Leaving the fridge open');
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const habits = [
    {
      name: 'Leaving the fridge open',
      wPoints: 34,
      lPoints: 5,
      status: '',
    },
    {
      name: 'Gambling',
      wPoints: 34,
      lPoints: 5,
      status: '',
    },
    {
      name: 'Spending too much money on food',
      wPoints: 80,
      lPoints: 5,
      status: '',
    },
    {
      name: 'Killing cats',
      wPoints: 34,
      lPoints: 5,
      status: '',
    },
    {
      name: 'Driving fast',
      wPoints: 1,
      lPoints: 5,
      status: '',
    }
  ];

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
      {isMenuOpen ? <Menu habits={habits} />
        :
        <div className='main-container'>
          <div>
            <p className='text-highlight'>Habit</p>
            <p className='text-habit big'>{habitName}</p>
          </div>
          <div className='counters-container'>
            <Counter
              type='Won'
              points={wPoints}
              onNewPoint={handleNewPoint}
            />
            <div className='divider'></div>
            <Counter
              type='Lost'
              points={lPoints}
              onNewPoint={handleNewPoint}
            />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
