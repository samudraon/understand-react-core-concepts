import React from 'react';

const DeviceDetails = (props) => {
    console.log(props);
    return (
        <div>
            <p>It's price is: { props.price}</p>
        </div>
    );
};

export default DeviceDetails;