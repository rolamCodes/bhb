import React from 'react';
import win from '../assets/win.png';
import lose from '../assets/lose.png';
import inProgress from '../assets/in_progress.png';

function HabitCard() {
    return (
        <div className='habit-card-container'>
            <div className='status'>
                <img className='habit-card-icon' src={win} alt='habit card icon' />
            </div>
            <div habit-card-text-container>
                <p className='text-highlight'>32 W / 25 L</p>
                <p className='text-habit'>Leaving the fridge open</p>
            </div>
        </div>
    );
}

export default HabitCard;