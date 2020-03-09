import React, { useState, useEffect } from 'react';

const ListItem = props => {
    return (
        <li>
            <h2>{props.name}</h2>
            {props.children}
        </li>
    )
}

export default ListItem;