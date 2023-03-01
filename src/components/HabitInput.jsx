import React from 'react';

function HabitInput({ isInputVisible, onAddNewHabit }) {
    return (
        <>
            {isInputVisible &&
                <div>
                    <form className='habit-input-container' onSubmit={onAddNewHabit}>
                        <input
                            className='input'
                            placeholder='Habit to break ( i.e. Gambling )'
                        />
                        <button
                            className='button button-small'
                            type='submit'
                        >
                            Confirm
                        </button>
                    </form>
                </div>
            }
        </>
    );
}

export default HabitInput;