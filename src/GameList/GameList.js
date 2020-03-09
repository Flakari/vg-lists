import React, { useEffect, useState } from 'react';
import ListItem from '../ListItem/ListItem'
import GameListItem from '../GameListItem/GameListItem';

const GameList = (props) => {
    const [data, setData] = useState(props.lists.filter(item => {
        return item.linkRoute === props.match.params.name;
    })[0]);
    const [listDisplay, setListDisplay] = useState([]);
    
    const createList = () => {
        setListDisplay([...data.contents].map(item => {
            return <GameListItem 
                key={item.name}
                name={item.name}
                index={item.index}
                lists={props.lists}
                gameList={data.name}
                deleteItem={props.deleteItem}
            />
        }));
    }

    useEffect(() => {
        console.log(props.match);
        setData(props.lists.filter(item => {
            return item.linkRoute === props.match.params.name;
        })[0]);
        createList();
    }, [props.match, data.contents]);

    useEffect(() => {
        console.log(props.match);
        console.log(props);
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            <h1>{data.name}</h1>
            <ul id="game-list">
                {listDisplay}
            </ul>
        </div>
    );
};

export default GameList;