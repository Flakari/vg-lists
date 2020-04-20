import React from 'react';
import Rating from '../Rating/Rating';

const ListItem = (props) => {
    return (
        <li>
            {props.children}
            <Rating 
                games={props.games}
                setGames={props.setGames}
                name={props.name}
                title={props.title}
                date={props.date}
                consoles={props.consoles}
                addGameInfo={props.addGameInfo}/>
        </li>
    )
}

export default ListItem;
