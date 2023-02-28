import React from 'react';
import HabitCard from './HabitCard';

function Menu({ habits }) {
    return (
        <div className='menu'>
            {habits.map((habit) => {
                return (
                    <HabitCard
                        habitName={habit.name}
                        wPoints={habit.wPoints}
                        lPoints={habit.lPoints}
                        stauts={habit.status}
                    />
                );
            })}
        </div>
    );
}

export default Menu;