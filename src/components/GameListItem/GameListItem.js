import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';

const GameListItem = (props) => {
    const [copyInputVisible, setCopyInputVisible] = useState(false);
    const [options, setOptions] = useState([]);
    const [selection, setSelection] = useState('');
    const changeArgs = [props.listIndex, props.index];
    const gameInfo = props.games[props.name];

    const onChangeHandler = (e) => {
        setSelection(e.target.value);
    };

    const copyClickHandler = () => {
        setCopyInputVisible(!copyInputVisible);
    };

    useEffect(() => {
        let tempList = [...props.lists].filter(item => {
            return item.name !== props.listName;
        });
        setOptions(tempList.map(item => {
            return <option key={item.name} value={item.name}>{item.name}</option>
        }));
        setSelection('---');
    }, [props.lists, props.listName]);

    const optionDisplay = (
        <>
            <select onChange={onChangeHandler}>
                <option>---</option>
                {options}
            </select>
            <button onClick={() => {props.add(props.name, selection); copyClickHandler();}}>Add</button>
        </>
    );

    return (
        <ListItem games={props.games} setGames={props.setGames} name={props.name} title={props.title} date={props.date} rating={props.rating} consoles={props.games[props.name].consoles} image={gameInfo.image}>   
            <button onClick={() => { props.changeItem('delete', ...changeArgs); }}>Delete</button><br />
            <button onClick={() => { props.changeItem('up', ...changeArgs); }}>Move Up</button><br />
            <button onClick={() => { props.changeItem('down', ...changeArgs); }}>Move Down</button><br />
            <button onClick={copyClickHandler}>{!copyInputVisible ? 'Copy To Other List' : 'Cancel'}</button>
            {copyInputVisible ? optionDisplay : null}
        </ListItem>
    );
};

export default GameListItem;
