import React from 'react';

function Point({ type }) {
    return (
        <div className={`point ${type}`}></div>
    );
}

export default Point;