import React, { useEffect, useState } from 'react';
import HabitCard from './HabitCard';
import Point from './Point';

function Counter() {
    // const [points, setPoints] = useState();

    // const getPoints = (num) => {
    //     const arr = [];
    //     for (let i = 0; i < num; i++) {
    //         arr.push(i);
    //         setPoints(arr);
    //         console.log(i);
    //     }
    // }

    // useEffect(() => {
    //     getPoints(3);
    // }, []);

    const points = [1, 1, 1, 1];

    return (
        <div className='counter-container'>
            <div className='points-container-outer'>
                <div className='points-container-inner'>
                    {points.map(point => <div className='point'></div>)}
                </div>
            </div>
            <button className='button'>Win</button>
        </div>
    );
}

export default Counter;