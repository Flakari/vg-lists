import React from 'react';

const ListItem = props => {
    return (
        <li>
            <h2>{props.name}</h2>
            <button onClick={() => props.add(props.list, props.name, props.list[0].name)}>Add To {props.list[0].name}</button>
            <button onClick={() => props.add(props.list, props.name, props.list[1].name)}>Add To {props.list[1].name}</button>
        </li>
    )
}

export default ListItem;