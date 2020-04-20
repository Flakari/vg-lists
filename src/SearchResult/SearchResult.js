import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';

const SearchResult = (props) => {
    const [options, setOptions] = useState([]);
    const [selection, setSelection] = useState(props.lists[0].name);

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
            <h2>{props.title}</h2>
            <select onChange={onChangeHandler}>
                {options}
            </select>
            <button onClick={() => props.add(props.lists, props.games, props.name, props.title, props.date, props.rating, props.consoles, selection)}>Add</button>
        </ListItem>
    );  
};

export default SearchResult;