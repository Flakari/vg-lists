import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';

const GameListItem = (props) => {
    const [copyInputVisible, setCopyInputVisible] = useState(false);
    const [options, setOptions] = useState([]);
    const [selection, setSelection] = useState('');
    const changeArgs = [props.lists, props.gameList, props.index];
    const gameInfo = props.games[props.name];

    const onChangeHandler = (e) => {
        setSelection(e.target.value);
    };

    const copyClickHandler = () => {
        setCopyInputVisible(!copyInputVisible);
    };

    useEffect(() => {
        let tempList = [...props.lists].filter(item => {
            return item.name !== props.gameList;
        });
        setOptions(tempList.map(item => {
            return <option key={item.name} value={item.name}>{item.name}</option>
        }));
        setSelection(tempList[0].name);
    }, [props.lists, props.gameList]);

    const optionDisplay = (
        <>
            <select onChange={onChangeHandler}>
                {options}
            </select>
            <button onClick={() => {props.add(props.lists, props.games, props.name, props.title, props.date, props.rating, props.consoles, selection); copyClickHandler();}}>Add</button>
        </>
    );

    return (
        <ListItem games={props.games} setGames={props.setGames} name={props.name} rating={props.rating}>
            <h2>{gameInfo.name}</h2>
            <p>{gameInfo.date}</p>
            <button onClick={() => { props.changeItem('delete', ...changeArgs); }}>Delete</button><br />
            <button onClick={() => { props.changeItem('up', ...changeArgs); }}>Move Up</button><br />
            <button onClick={() => { props.changeItem('down', ...changeArgs); }}>Move Down</button><br />
            <button onClick={copyClickHandler}>{!copyInputVisible ? 'Copy To Other List' : 'Cancel'}</button>
            {copyInputVisible ? optionDisplay : null}
            <p>{props.index}</p>
            <p>{props.gameList}</p>
        </ListItem>
    );
};

export default GameListItem;
