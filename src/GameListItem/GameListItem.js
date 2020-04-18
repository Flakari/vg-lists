import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';

const GameListItem = (props) => {
    const [copyInputVisible, setCopyInputVisible] = useState(false);
    const [options, setOptions] = useState([]);
    const [selection, setSelection] = useState('');

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
            <button onClick={() => props.add(props.lists, props.name, selection)}>Add</button>
        </>
    );

    return (
        <ListItem {...props}>
            <button onClick={() => { props.changeItem('delete', props.lists, props.gameList, props.index); }}>Delete</button><br />
            <button onClick={() => { props.changeItem('up', props.lists, props.gameList, props.index); }}>Move Up</button><br />
            <button onClick={() => { props.changeItem('down', props.lists, props.gameList, props.index); }}>Move Down</button><br />
            <button onClick={copyClickHandler}>{!copyInputVisible ? 'Copy To Other List' : 'Cancel'}</button>
            {copyInputVisible ? optionDisplay : null}
            <p>{props.index}</p>
            <p>{props.gameList}</p>
        </ListItem>
    );
};

export default GameListItem;