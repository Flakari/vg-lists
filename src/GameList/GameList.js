import React, { useEffect, useState } from 'react';
import GameListItem from '../GameListItem/GameListItem';

const GameList = (props) => {
    const [data, setData] = useState(props.lists.filter(item => {
        return item.linkRoute === props.match.params.name;
    })[0]);

    useEffect(() => {
        console.log(props.match);
        setData(props.lists.filter(item => {
            return item.linkRoute === props.match.params.name;
        })[0]);
    }, [props.match, props.lists]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            <h1>{data.name}</h1>
            <ul id="game-list">
                {[...data.contents].map(item => {
                    return <GameListItem 
                        key={item.name}
                        name={item.name}
                        index={item.index}
                        lists={props.lists}
                        gameList={data.name}
                        changeItem={props.changeItem}
                        deleteItem={props.deleteItem}
                        moveItem={props.moveItem}
                    />
                })}
            </ul>
        </div>
    );
};

export default GameList;