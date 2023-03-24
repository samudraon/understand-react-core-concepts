import React from 'react';

const Knob = (props) => {
    return (
        <div style={{ border: '2px solid salmon', margin: '20px' }}>
            <h2>This is Knob Component</h2>
            <p>Steps Here is: { props.steps}</p>
        </div>
    );
};

export default Knob;