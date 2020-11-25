import React, { useState, useEffect } from 'react';
import Rating from '../Rating/Rating';
import Consoles from '../Consoles/Consoles';
import './ListItem.scss';

const ListItem = (props) => {
    const monthName = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [year, month, day] = props.date !== null ? props.date.split('-') : '';

    const imageStyle = `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4)), url(${props.image})`;
    const defaultStyle = 'linear-gradient(#8b91ae, #45456c)';

    const [backgroundImage, setBackgroundImage] = useState(props.showImages ? imageStyle : defaultStyle);

    useEffect(() => {
        props.showImages ? setBackgroundImage(imageStyle) : setBackgroundImage(defaultStyle);
    }, [props.showImages, imageStyle]);

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
                    <p>{props.date !== null ? `Released: ${monthName[Number(month)]} ${day}, ${year}` : ''}</p>
                </div>
                {props.hasOwnProperty('delete') ? <button onClick={props.delete}><img alt="Delete game from list" src={require('../../images/Delete_icon.svg')}></img></button> : null}
            </div>
            <Rating {...props} />
            <Consoles {...props} />
            {props.children}
        </li>
    )
}

export default ListItem;
