import React from 'react';

const Consoles = (props) => {
    return (
        <div>
            <ul>
                {props.consoles.map(item => {
                    const platform = !item.hasOwnProperty('platform') ? item.name : item.platform.name;
                    return <li key={platform}>{platform}</li>
                })}
            </ul>
        </div>
    );
};

export default Consoles;
