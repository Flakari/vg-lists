import React from 'react';
import ListItem from '../ListItem/ListItem';

const GameListItem = (props) => {
    return (
        <ListItem {...props}>
            <button onClick={() => { props.changeItem('delete', props.lists, props.gameList, props.index); }}>Delete</button>
            <button onClick={() => { props.changeItem('up', props.lists, props.gameList, props.index); }}>Move Up</button>
            <button onClick={() => { props.changeItem('down', props.lists, props.gameList, props.index); }}>Move Down</button>
            <p>{props.index}</p>
            <p>{props.gameList}</p>
        </ListItem>
    );
};

export default GameListItem;