import React, { useState } from 'react';

const Consoles = (props) => {
    const [hasStoredData, setHasStoredData] = useState(props.games.hasOwnProperty(props.name));

    async function onClickHandler(index) {
        const tempGames = JSON.parse(JSON.stringify(props.games));
        if (!hasStoredData) {
            await new Promise((resolve) => {
                props.addGameInfo(props.name, props.title, props.date, null, props.consoles, props.image);
                setHasStoredData(true);
            })
            .then(() => {
                tempGames[props.name].consoles[index].owned = !tempGames[props.name].consoles[index].owned;
                props.setGames(tempGames);
            });
        } else {
            tempGames[props.name].consoles[index].owned = !tempGames[props.name].consoles[index].owned;
            props.setGames(tempGames);
        }
    };

    return (
        <div>
            <ul>
                {props.consoles.map((item, index) => {
                    const platform = !item.hasOwnProperty('platform') ? item.name : item.platform.name;
                    return (
                        <li
                            className={hasStoredData && item.owned ? 'owned' : null}
                            onClick={() => onClickHandler(index)}
                            key={platform}
                        >{platform}</li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Consoles;
