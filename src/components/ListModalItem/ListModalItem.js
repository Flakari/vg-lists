import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'; 
import { withRouter } from 'react-router-dom';
import TextInput from '../TextInput/TextInput';

const ListModalItem = (props) => {
    const [mergeInputVisible, setMergeInputVisible] = useState(false);
    const [mergeOptions, setMergeOptions] = useState([]);
    const [mergeSelection, setMergeSelection] = useState('');
    const [showMerge, setShowMerge] = useState(false);

    const renameList = (name, index) => {
        if (String(document.URL.match(/[^/]+(?=\/$|$)/)) === props.lists[index].linkRoute) {
		    props.history.push('/');
        }
        props.rename(name, index);
    }

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
                    <TextInput
                        id='list-copy-input'
                        text='Copy List'
                        inputFunction={props.copy}
                        args={props.contents}
                    />
                    <TextInput
                        id='list-rename-input'
                        text='Rename List'
                        inputFunction={renameList}
                        args={props.index}
                        standardInput={props.name}
                    />
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
