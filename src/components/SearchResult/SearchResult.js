import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';

const SearchResult = (props) => {
    const [options, setOptions] = useState([]);
    const [selection, setSelection] = useState('---');

    const onChangeHandler = (e) => {
        setSelection(e.target.value);
    };

    useEffect(() => {
        setOptions(props.lists.map(item => {
            return <option key={item.name} value={item.name}>{item.name}</option>
        }));
    }, [props.lists]);

    return (
        <ListItem {...props}>
            <select onChange={onChangeHandler}>
                <option>---</option>
                {options}
            </select>
            <button onClick={() => {props.add(props.name, selection); props.addGameInfo(props.name, props.title, props.date, props.rating, props.consoles, props.image);}}>Add</button>
            <button onClick={() => {props.add(props.name, props.quickAdd); props.addGameInfo(props.name, props.title, props.date, props.rating, props.consoles, props.image);}}>Quick Add</button>
        </ListItem>
    );  
};

export default SearchResult;
