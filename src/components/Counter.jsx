import React, { useEffect, useState } from 'react';
import Point from './Point';

function Counter({ status, type, points, onNewPoint }) {
    const [counterPoints, setCounterPoints] = useState([]);

    useEffect(() => {
        const arr = [];
        for (let i = 0; i < points; i++) {
            arr.push(1);
            setCounterPoints(arr);
        }
    }, [points]);

    return (
        <div className='counter-container'>
            <div className='points-container-outer'>
                <div className='points-container-inner'>
                    {counterPoints.map(point => <Point type={type} />)}
                </div>
            </div>
            <button className='button' onClick={status === 'open' ? () => onNewPoint(type) : () => alert(`You have already ${status}`)}>{type}</button>
        </div>
    );
}

export default Counter;