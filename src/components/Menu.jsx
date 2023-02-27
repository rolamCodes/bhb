import React from 'react';
import HabitCard from './HabitCard';

function Menu() {
    return (
        <div className='menu'>
            <HabitCard />
            <HabitCard />
            <HabitCard />
            <HabitCard />
        </div>
    );
}

export default Menu;