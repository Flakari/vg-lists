import React, { useState, useEffect } from 'react';

const Rating = (props) => {
    const [gameRating, setGameRating] = useState('-');
    const [hoverValue, setHoverValue] = useState(gameRating || 0);

    useEffect(() => {
        setGameRating(() => {
            if (props.games.hasOwnProperty(props.name)) {
                return props.games[props.name].rating;
            }
        });

        setHoverValue(() => {
            if (props.games.hasOwnProperty(props.name)) {
                return props.games[props.name].rating;
            }
        });
    }, [props.games, props.name])
    

    async function clickHandler(number) {
        if (!props.games.hasOwnProperty(props.name)) {
            await new Promise((resolve) => {
                props.addGameInfo(props.title, props.date, number, props.consoles, props.image);
            });
        }

        const newGames = JSON.parse(JSON.stringify(props.games));
        newGames[props.name].rating = number;
        props.setGames(newGames);
        setGameRating(() => {
            if (props.games.hasOwnProperty(props.name)) {
                return props.games[props.name].rating;
            }
        });
    };

    return (
        <div>
            <p>Rating: {gameRating || '-'}/5</p>
            {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(item => {
                return (
                    <button
                        key={item}
                        className={`rating ${hoverValue >= item ? 'rating-hover' : null}`}
                        onMouseEnter={() => setHoverValue(item)}
                        onMouseLeave={() => setHoverValue(gameRating)}
                        onClick={() => clickHandler(item)}
                    >{item}</button>
                );
            })}
            <br />
            <button onClick={() => {clickHandler(0)}}>Remove Rating</button>
        </div>
    );
};

export default Rating;
