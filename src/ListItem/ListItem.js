import React from 'react';
import Rating from '../Rating/Rating';

const ListItem = (props) => {
    return (
        <li>
            {props.children}
            <Rating />
        </li>
    )
}

export default ListItem;