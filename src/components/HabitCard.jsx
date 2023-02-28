import React from 'react';
import win from '../assets/win.png';
import lose from '../assets/lose.png';
import open from '../assets/open.png';

function HabitCard({ habitObject, name, wPoints, lPoints, status, onCardClick }) {
    return (
        <div className='habit-card-container' onClick={() => onCardClick(habitObject)}>
            <div className={`status ${status}`}>
                {status === 'Won' ? <img className='habit-card-icon' src={win} alt='habit card icon' />
                    : status === 'Lost' ? <img className='habit-card-icon' src={lose} alt='habit card icon' />
                        : <img className='habit-card-icon' src={open} alt='habit card icon' />
                }
            </div>
            <div habit-card-text-container>
                <p className='text-highlight'>{wPoints} W / {lPoints} L</p>
                <p className='text-habit'>{name}</p>
            </div>
        </div>
    );
}

export default HabitCard;