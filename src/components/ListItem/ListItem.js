import React, { useState, useEffect } from 'react';
import Rating from '../Rating/Rating';
import Consoles from '../Consoles/Consoles';
import './ListItem.scss';

const ListItem = (props) => {
    const monthName = [undefined, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [year, month, day] = props.date.split('-');
    const [backgroundImage, setBackgroundImage] = useState(props.showImage ? `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4)), url(${props.image})` : 'linear-gradient(#8b91ae, #45456c)');

    useEffect(() => {
        if (props.showImages) {
            setBackgroundImage(`linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4)), url(${props.image})`);
        } else {
            setBackgroundImage('linear-gradient(#8b91ae, #45456c)');
        }
    }, [props.showImages, props.image])

    const style = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center 0px'
    }

    return (
        <li style={style}>
            <div className="list-item-header">
                <div>
                    <h2>{props.title}</h2>
                    <p>{`Released: ${monthName[Number(month)]} ${day}, ${year}`}</p>
                </div>
                {props.hasOwnProperty('delete') ? <button onClick={props.delete}><img alt="Delete game from list" src={require('../../images/Delete_icon.svg')}></img></button> : null}
            </div>
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
            {props.children}
        </li>
    )
}

export default ListItem;
