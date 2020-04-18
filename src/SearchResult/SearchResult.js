import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';

const SearchResult = (props) => {
    const [options, setOptions] = useState([]);
    const [selection, setSelection] = useState('');

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
                {options}
            </select>
            <button onClick={() => props.add(props.lists, props.name, selection || props.lists[0].name)}>Add</button>
    </ListItem>);  
};

export default SearchResult;