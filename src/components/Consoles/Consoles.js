import React, { useState, useEffect } from 'react';
import './Consoles.scss';

const Consoles = (props) => {
    const [hasStoredData, setHasStoredData] = useState(props.games.hasOwnProperty(props.name));
    const [showWholeList, setShowWholeList] = useState(props.consoles === null ? false : props.consoles.length <= 5);
    const needShortenedList = useState(props.consoles === null ? false : props.consoles.length > 5);

    useEffect(() => {
        setHasStoredData(props.games.hasOwnProperty(props.name));
    }, [props]);

    const changeListVisiblity = () => {
        setShowWholeList(!showWholeList);
    };

    const addRemoveConsole = (index) => {
        const tempGames = JSON.parse(JSON.stringify(props.games));
        if (!hasStoredData) {
            const tempConsoles = [...props.consoles].map((item, i) => {
                return {
                    name: item.platform.name,
                    owned: index === i
                }
            });
            props.addGameInfo(props.name, props.title, props.date, null, tempConsoles, props.image);
            setHasStoredData(true);
        } else {
            tempGames[props.name].consoles[index].owned = !tempGames[props.name].consoles[index].owned;
            props.setGames(tempGames);
        }
    };

    const mapConsolesList = (item, index) => {
        const platform = !item.hasOwnProperty('platform') ? item.name : item.platform.name;
        return (
            <li
                className={hasStoredData && item.owned ? 'owned' : null}
                onClick={() => addRemoveConsole(index)}
                key={platform}
            >{platform}</li>
        );
    }

    return (
        <div>
            <ul className="consoles-list">
                {props.consoles === null ? null :
                    (!needShortenedList || (needShortenedList && showWholeList)) ? props.consoles.map(mapConsolesList) :
                        [...props.consoles].splice(0, 5).map(mapConsolesList)}
                {!needShortenedList[0] ? null : <li onClick={changeListVisiblity}>{!showWholeList ? '+' : '-'}</li>}
            </ul>
        </div>
    );
};

export default Consoles;
