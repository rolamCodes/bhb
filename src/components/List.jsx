import React from 'react';
import HabitCard from './HabitCard';

function List({ habits, onCardClick }) {
    return (
        <div className='list'>
            {habits.map((habit) => {
                return (
                    <HabitCard
                        habitObject={habit}
                        name={habit.name}
                        wPoints={habit.wPoints}
                        lPoints={habit.lPoints}
                        status={habit.status}
                        onCardClick={onCardClick}
                    />
                );
            })}
        </div>
    );
}

export default List;