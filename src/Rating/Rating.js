import React, { useState, useEffect } from 'react';

const Rating = (props) => {
    const [gameRating, setGameRating] = useState('-');

    useEffect(() => {
        setGameRating(() => {
            if (props.games.hasOwnProperty(props.name)) {
                return props.games[props.name].rating;
            }
        });
    }, [props.games, props.name])
    

    async function clickHandler(games) {
        const number = Math.ceil(Math.random() * 5);

        if (!games.hasOwnProperty(props.name)) {
            await new Promise((resolve) => {
                props.addGameInfo(props.games, props.name, props.title, props.date, number, props.consoles);
            });
        }

        const newGames = JSON.parse(JSON.stringify(games));
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
            <button onClick={() => clickHandler(props.games)}>Change Rating</button>
        </div>
    );
};

export default Rating;
