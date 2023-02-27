import React, { useEffect, useState } from 'react';
import HabitCard from './HabitCard';
import Point from './Point';

function Counter({ type, points }) {

    return (
        <div className='counter-container'>
            <div className='points-container-outer'>
                <div className='points-container-inner'>
                    {points.map(point => <Point type={type} />)}
                </div>
            </div>
            <button className='button'>{type}</button>
        </div>
    );
}

export default Counter;