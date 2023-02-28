import React from 'react';
import HabitCard from './HabitCard';

function Menu({ habits }) {
    return (
        <div className='menu'>
            {habits.map((habit) => {
                return (
                    <HabitCard
                        name={habit.name}
                        wPoints={habit.wPoints}
                        lPoints={habit.lPoints}
                        status={habit.status}
                    />
                );
            })}
        </div>
    );
}

export default Menu;