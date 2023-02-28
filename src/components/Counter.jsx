import React, { useEffect, useState } from 'react';
import HabitCard from './HabitCard';
import Point from './Point';

function Counter({ type, points, onNewPoint }) {
    const [counterPoints, setCounterPoints] = useState([]);

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < points; i++) {
            arr.push(1);
            setCounterPoints(arr);
        }
    }, []);

    return (
        <div className='counter-container'>
            <div className='points-container-outer'>
                <div className='points-container-inner'>
                    {counterPoints.map(point => <Point type={type} />)}
                </div>
            </div>
            <button className='button' onClick={() => onNewPoint(type)}>{type}</button>
        </div>
    );
}

export default Counter;