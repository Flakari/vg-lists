import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'; 
import { withRouter } from 'react-router-dom';

const ListModalItem = (props) => {
    const [copyValue, setCopyValue] = useState('');
    const [showCopy, setShowCopy] = useState(false);
    const [renameValue, setRenameValue] = useState('');
    const [showRename, setShowRename] = useState(false);
    const [mergeInputVisible, setMergeInputVisible] = useState(false);
    const [mergeOptions, setMergeOptions] = useState([]);
    const [mergeSelection, setMergeSelection] = useState('');
    const [showMerge, setShowMerge] = useState(false);

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

    const onChangeHandler = (e) => {
        setMergeSelection(e.target.value);
    };

    const mergeClickHandler = () => {
        setMergeInputVisible(!mergeInputVisible);
    };

    useEffect(() => {
        let tempList = [...props.lists].filter(item => {
            return item.name !== props.name;
        });
        setMergeOptions(tempList.map(item => {
            return <option key={item.name} value={item.name}>{item.name}</option>
        }));
        setMergeSelection('---');
    }, [props.lists, props.name]);

    const hideMergeConfirmation = () => {
        setShowMerge(false);
    };

    const showMergeConfirmation = () => {
        setShowMerge(mergeSelection !== '---' ? true : false);
    };

    const optionDisplay = (
        <>
            <select onChange={onChangeHandler}>
                <option>---</option>
                {mergeOptions}
            </select>
            <button onClick={() => { showMergeConfirmation(); mergeClickHandler(); }}>Merge</button>
        </>
    );

    return (
        <>
            <li key={props.name} className='modal-list-item'>
                <div>
                    <h2>{props.name}</h2>
                    <button onClick={() => { props.deleteIndex(props.index); props.showDelete(); }}>Delete List</button>
                    <button onClick={() => props.moveList('up', props.index)}>Move Up</button>
                    <button onClick={() => props.moveList('down', props.index)}>Move Down</button>
                    <button onClick={copyVisibility}>{showCopy ? 'Cancel' : 'Copy List'}</button>
                    {showCopy ? copyInput : null}
                    <button onClick={renameVisibility}>{showRename ? 'Cancel' : 'Rename List'}</button>
                    {showRename ? renameInput : null}
                    <button onClick={mergeClickHandler}>{mergeInputVisible ? 'Cancel' : 'Merge Into'}</button>
                    {mergeInputVisible ? optionDisplay : null}
                </div>
            </li>
            <Modal modalClass={'merge-list'} showModal={showMerge} hideModal={hideMergeConfirmation}>
                <ConfirmationModal
                    message={`Are you sure you want to merge ${props.name} into ${mergeSelection}?`}
                    func={props.merge} 
                    funcArgs={[props.index, mergeSelection]}
                    hide={hideMergeConfirmation}
                />
            </Modal>
        </>
    );
};

export default withRouter(ListModalItem);
