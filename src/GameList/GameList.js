import React, { useEffect, useState } from 'react';
import ListItem from '../ListItem/ListItem'

const GameList = (props) => {
    const [data, setData] = useState(props.lists.filter(item => {
        return item.linkRoute === props.match.params.name;
    })[0]);
    const [listDisplay, setListDisplay] = useState([]);
    
    const createList = () => {
        setListDisplay([...data.contents].map(item => {
            return <ListItem 
                key={item}
                name={item}
                add={props.add}
                list={props.lists}
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