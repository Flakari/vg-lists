import React, { useEffect, useState } from 'react';
import GameListItem from '../GameListItem/GameListItem';

const GameList = (props) => {
    const [listData, setListData] = useState(props.lists.filter(item => {
        return item.linkRoute === props.match.params.name;
    })[0]);

    useEffect(() => {
        setListData(props.lists.filter(item => {
            return item.linkRoute === props.match.params.name;
        })[0]);
    }, [props.match, props.lists]);

    return (
        <div>
            <h1>{listData.name}</h1>
            {listData.contents.length === 0 ? <p>There are no games here! Search for games to start filling this list out!</p> : null}
            <ul id="game-list">
                {[...listData.contents].map(item => {
                    return <GameListItem 
                        key={item.name}
                        name={item.name}
                        title={props.games[item.name].name}
                        index={item.index}
                        image={item['background-image']}
                        lists={props.lists}
                        date={props.games[item.name].date}
                        games={props.games}
                        listName={listData.name}
                        listIndex={listData.index}
                        changeItem={props.changeItem}
                        add={props.add}
                        setGames={props.setGames}
                        showImages={props.showImages}
                    />
                })}
            </ul>
        </div>
    );
};

export default GameList;
