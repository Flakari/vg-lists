import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const ListModalItem = (props) => {
    const [copyValue, setCopyValue] = useState('');
    const [showCopy, setShowCopy] = useState(false);
    const [renameValue, setRenameValue] = useState('');
    const [showRename, setShowRename] = useState(false);

    const copyChangeHandler = (input) => {
        setCopyValue(input.target.value);
    };

    const copyVisibility = () => {
        setShowCopy(!showCopy);
    };

    const renameChangeHandler = (input) => {
        setRenameValue(input.target.value);
    };

    const renameVisibility = () => {
        setShowRename(!showRename);
    };

    const renameList = (name, index) => {
        if (String(document.URL.match(/[^/]+(?=\/$|$)/)) === props.lists[index].linkRoute) {
		    props.history.push('/');
        }
        props.rename(name, index);
    }

    const copyInput = (
        <form onSubmit={e => { e.preventDefault(); props.copy(copyValue, props.contents); setShowCopy(false); setCopyValue('')}}>
            <input id="list-copy-input" type="text" value={copyValue} onChange={copyChangeHandler} autoFocus></input>
            <input type="submit" value="Submit"></input>
        </form>
    );

    const renameInput = (
        <form onSubmit={e => { e.preventDefault(); renameList(renameValue, props.index); setShowRename(false); setRenameValue('')}}>
            <input id="list-rename-input" type="text" value={renameValue} onChange={renameChangeHandler} autoFocus></input>
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
                <button onClick={renameVisibility}>{showRename ? 'Cancel' : 'Rename List'}</button>
                {showRename ? renameInput : null}
            </div>
        </li>
    );
};

export default withRouter(ListModalItem);
