import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const nextSteps = steps + 1;
        setSteps(nextSteps);
    }

    useEffect(() => {
        console.log('hello')
    }, [steps])

    return (
        <div style={{ border: '2px solid lightgray', margin: '10px' }}>
            <h2>This is my smart Watch!</h2>
            <p>Steps: {steps}</p>
            <button onClick={increaseSteps}>De Dour......</button>
            <Dial step={steps}></Dial>
        </div>
    );
};

export default Watch;