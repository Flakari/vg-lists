import React from 'react';

const ListItem = props => {
    return (
        <li>
            <h2>{props.name}</h2>
            {props.children}
        </li>
    )
}

export default ListItem;