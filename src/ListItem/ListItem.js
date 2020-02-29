import React, { useState, useEffect } from 'react';

const ListItem = props => {
    const [options, setOptions] = useState([]);
    const [selection, setSelection] = useState('');

    const onChangeHandler = (e) => {
        setSelection(e.target.value);
    };

    useEffect(() => {
        setOptions(props.list.map(item => {
            return <option key={item.name} value={item.name}>{item.name}</option>
        }));
    }, [props.list]);

    return (
        <li>
            <h2>{props.name}</h2>
            {props.type === 'search' ? (<><select onChange={onChangeHandler}>
                {options}
            </select>
            <button onClick={() => props.add(props.list, props.name, selection || props.list[0].name)}>Add</button></>)
            : null}
        </li>
    )
}

export default ListItem;