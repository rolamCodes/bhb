import React, { useEffect, useState } from 'react';
import HabitCard from './HabitCard';
import Point from './Point';

function Counter({ type, points, onNewPoint }) {

    return (
        <div className='counter-container'>
            <div className='points-container-outer'>
                <div className='points-container-inner'>
                    {points.map(point => <Point type={type} />)}
                </div>
            </div>
            <button className='button' onClick={() => onNewPoint(type)}>{type}</button>
        </div>
    );
}

export default Counter;