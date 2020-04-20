import React, { useEffect, useState } from 'react';
import GameListItem from '../GameListItem/GameListItem';

const GameList = (props) => {
    const [listData, setListData] = useState(props.lists.filter(item => {
        return item.linkRoute === props.match.params.name;
    })[0]);

    useEffect(() => {
        console.log(props.match);
        setListData(props.lists.filter(item => {
            return item.linkRoute === props.match.params.name;
        })[0]);
    }, [props.match, props.lists]);

    useEffect(() => {
        console.log(listData);
    }, [listData]);

    return (
        <div>
            <h1>{listData.name}</h1>
            <ul id="game-list">
                {[...listData.contents].map(item => {
                    return <GameListItem 
                        key={item.name}
                        name={item.name}
                        index={item.index}
                        lists={props.lists}
                        games={props.games}
                        gameList={listData.name}
                        changeItem={props.changeItem}
                        add={props.add}
                    />
                })}
            </ul>
        </div>
    );
};

export default GameList;