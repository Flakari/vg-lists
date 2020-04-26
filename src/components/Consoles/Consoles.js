import React, { useState, useEffect } from 'react';

const Consoles = (props) => {
    const [hasStoredData, setHasStoredData] = useState(props.games.hasOwnProperty(props.name));
    const [showWholeList, setShowWholeList] = useState(props.consoles.length <= 5);
    const needShortenedList = useState(props.consoles.length > 5);

    useEffect(() => {
        setHasStoredData(props.games.hasOwnProperty(props.name));
    }, [props]);

    const changeListVisiblity = () => {
        setShowWholeList(!showWholeList);
    };

    const onClickHandler = (index) => {
        console.log(props.consoles);
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

    return (
        <div>
            <ul className="consoles-list">
                {(!needShortenedList || (needShortenedList && showWholeList)) ? props.consoles.map((item, index) => {
                    const platform = !item.hasOwnProperty('platform') ? item.name : item.platform.name;
                    return (
                        <li
                            className={hasStoredData && item.owned ? 'owned' : null}
                            onClick={() => onClickHandler(index)}
                            key={platform}
                        >{platform}</li>
                    );
                }) : [...props.consoles].splice(0, 5).map((item, index) => {
                    const platform = !item.hasOwnProperty('platform') ? item.name : item.platform.name;
                    return (
                        <li
                            className={hasStoredData && item.owned ? 'owned' : null}
                            onClick={() => onClickHandler(index)}
                            key={platform}
                        >{platform}</li>
                    );
                })}
                {!needShortenedList[0] ? null : <li onClick={changeListVisiblity}>{!showWholeList ? '+' : '-'}</li>}
            </ul>
        </div>
    );
};

export default Consoles;
