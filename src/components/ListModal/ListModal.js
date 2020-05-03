import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './ListModal.scss';
import Modal from '../Modal/Modal';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import ListModalItem from '../ListModalItem/ListModalItem';

const ListModal = (props) => {
    const [addValue, setAddValue] = useState('');
    const [showAdd, setShowAdd] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(0);
    
    const addChangeHandler = (input) => {
        setAddValue(input.target.value);
    };

    const addVisibility = () => {
        setShowAdd(!showAdd);
    };

    const changeDeleteIndex = (index) => {
        setDeleteIndex(index);
    };

    const showDeleteConfirmation = () => {
        setShowDelete(true);
    };

    const hideDeleteConfirmation = () => {
        setShowDelete(false);
    };

    const deleteItem = (index) => {
        if (String(document.URL.match(/[^/]+(?=\/$|$)/)) === props.lists[index].linkRoute) {
		    props.history.push('/');
        }
        props.delete(index);
        hideDeleteConfirmation();
    };

    const addInput = (
        <form onSubmit={e => { e.preventDefault(); props.add(addValue); setShowAdd(false); setAddValue('')}}>
            <input id="list-input" type="text" value={addValue} onChange={addChangeHandler} autoFocus></input>
            <input type="submit" value="Submit"></input>
        </form>
    );

    return (
        <>
            <h1>List Manager</h1>
            <p>Add, delete, copy, reorganize, and even rename lists here! Your one stop shop for video game list management!</p>
            <button onClick={addVisibility}>{showAdd ? 'Cancel' : 'Add List'}</button>
                {showAdd ? addInput : null}
            <ul id='modal-list-container'>
                {props.lists.map(item => {
                    return (
                        <ListModalItem
                            key={item.name}
                            name={item.name}
                            index={item.index}
                            contents={item.contents}
                            moveList={props.moveList}
                            deleteIndex={changeDeleteIndex}
                            showDelete={showDeleteConfirmation}
                            copy={props.copy}
                            rename={props.rename}
                            lists={props.lists}
                        />
                    );
                })}
            </ul>
            {showDelete ? (
                <Modal modalClass={'delete-list'} showModal={showDelete} hideModal={hideDeleteConfirmation}>
                    <ConfirmationModal
                        message='Are you sure you want to delete this list?'
                        func={deleteItem} 
                        funcArgs={deleteIndex}
                        hide={hideDeleteConfirmation}
                    />
                </Modal>
            ) : null} 
        </>
    );
};

export default withRouter(ListModal);
