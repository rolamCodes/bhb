import React from 'react';
import win from '../assets/win.png';
import lose from '../assets/lose.png';
import inProgress from '../assets/in_progress.png';

function HabitCard({ habitName, wPoints, lPoints, status }) {
    return (
        <div className='habit-card-container'>
            <div className='status'>
                {/* change icon bases on status */}
                <img className='habit-card-icon' src={win} alt='habit card icon' />
            </div>
            <div habit-card-text-container>
                <p className='text-highlight'>{wPoints} W / {lPoints} L</p>
                <p className='text-habit'>{habitName}</p>
            </div>
        </div>
    );
}

export default HabitCard;