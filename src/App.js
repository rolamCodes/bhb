import React, { useState } from "react";
import Nav from './components/Nav';
import Counter from './components/Counter';
import List from "./components/List";

function App() {
  const [wPoints, setWPoints] = useState();
  const [lPoints, setLPoints] = useState();
  const [habitName, setHabitName] = useState('');
  const [isHabitOpen, setIsHabitOpen] = useState(false);

  const habits = [
    {
      name: 'Leaving the fridge open',
      wPoints: 34,
      lPoints: 5,
      status: 'Won',
    },
    {
      name: 'Gambling',
      wPoints: 15,
      lPoints: 0,
      status: 'Lost',
    },
    {
      name: 'Spending too much money on food',
      wPoints: 80,
      lPoints: 20,
      status: 'InProgress',
    },
    {
      name: 'Killing cats',
      wPoints: 100,
      lPoints: 12,
      status: 'Won',
    },
    {
      name: 'Driving fast',
      wPoints: 1,
      lPoints: 5,
      status: 'Won',
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

  const handleCardClick = (habitObject) => {
    habits.forEach((habit) => {
      if (habit.name === habitObject.name) {
        setHabitName(habitObject.name);
        setWPoints(habitObject.wPoints);
        setLPoints(habitObject.lPoints);
        setIsHabitOpen(!isHabitOpen);
      }
    });
  }

  const handleAddNewHabit = () => {
    console.log('Add new habit');
  }

  return (
    <div className='app'>
      <Nav
        isHabitOpen={isHabitOpen}
        onClose={() => setIsHabitOpen(!isHabitOpen)}
        onAdd={handleAddNewHabit}
      />
      {isHabitOpen ?
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
        :
        <List habits={habits} onCardClick={handleCardClick} />
      }
    </div>
  );
}

export default App;
