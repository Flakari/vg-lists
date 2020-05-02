import React, { useState } from 'react';

const ListModalItem = (props) => {
    const [copyValue, setCopyValue] = useState('');
    const [showCopy, setShowCopy] = useState(false);

    const copyChangeHandler = (input) => {
        setCopyValue(input.target.value);
    };

    const copyVisibility = () => {
        setShowCopy(!showCopy);
    };

    const copyInput = (
        <form onSubmit={e => { e.preventDefault(); props.copy(copyValue, props.contents); setShowCopy(false); setCopyValue('')}}>
            <input id="list-copy-input" type="text" value={copyValue} onChange={copyChangeHandler} autoFocus></input>
            <input type="submit" value="Submit"></input>
        </form>
    );

    return (
        <li key={props.name} className='modal-list-item'>
            <div>
                <h2>{props.name}</h2>
                <button onClick={() => {props.deleteIndex(props.index); props.showDelete()}}>Delete List</button>
                <button onClick={() => props.moveList('up', props.index)}>Move Up</button>
                <button onClick={() => props.moveList('down', props.index)}>Move Down</button>
                <button onClick={copyVisibility}>{showCopy ? 'Cancel' : 'Copy List'}</button>
                {showCopy ? copyInput : null}
            </div>
        </li>
    );
};

export default ListModalItem;
