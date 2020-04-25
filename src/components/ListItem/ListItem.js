import React from 'react';
import Rating from '../Rating/Rating';
import Consoles from '../Consoles/Consoles';

const ListItem = (props) => {
    const style = {
        background: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.9)), url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <li style={style}>
            {props.children}
            <Rating
                games={props.games}
                setGames={props.setGames}
                name={props.name}
                title={props.title}
                date={props.date}
                consoles={props.consoles}
                addGameInfo={props.addGameInfo}
                image={props.image}
            />
            <Consoles
                games={props.games}
                setGames={props.setGames}
                name={props.name}
                title={props.title}
                date={props.date}
                consoles={props.consoles}
                addGameInfo={props.addGameInfo}
                image={props.image}
            />
        </li>
    )
}

export default ListItem;
