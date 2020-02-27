import React from 'react';

const ListItem = props => {
    return (
        <li>
            <h2>{props.name}</h2>
            <button onClick={() => props.add(props.name, props.list[0])}>Add To Test</button>
            <button onClick={() => props.add(props.name, props.list[1])}>Add To Other</button>
        </li>
    )
}

export default ListItem;