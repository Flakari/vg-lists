import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';

const GameListItem = (props) => {
    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <ListItem {...props}>
            <button onClick={e => { e.preventDefault(); props.deleteItem(props.lists, props.gameList, props.index); }}>Delete</button>
            <p>{props.index}</p>
            <p>{props.gameList}</p>
        </ListItem>
        
    );
};

export default GameListItem;