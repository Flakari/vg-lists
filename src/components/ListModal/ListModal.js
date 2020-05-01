import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './ListModal.scss';
import Modal from '../Modal/Modal';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const ListModal = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [inputVisible, setInputVisible] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(0);

    const inputChangeHandler = (input) => {
        setInputValue(input.target.value);
    };

    const inputVisibility = () => {
        setInputVisible(!inputVisible);
    };

    const showDeleteConfirmation = () => {
        setShowDelete(true);
    };

    const hideDeleteConfirmation = () => {
        setShowDelete(false);
    };

    const deleteItem = async (index) => {
        if (String(document.URL.match(/[^/]+(?=\/$|$)/)) === props.lists[index].linkRoute) {
		    props.history.push('/');
        }
        props.delete(index);
        hideDeleteConfirmation();
    };

    const input = (
        <form onSubmit={e => { e.preventDefault(); props.add(inputValue); setInputVisible(false); setInputValue('')}}>
            <input id="list-input" type="text" value={inputValue} onChange={inputChangeHandler} autoFocus></input>
            <input type="submit" value="Submit"></input>
        </form>
    );

    return (
        <>
            <h1>List Manager</h1>
            <p>Add, delete, copy, reorganize, and even rename lists here! Your one stop shop for video game list management!</p>
            <button onClick={inputVisibility}>{inputVisible ? 'Cancel' : 'Add List'}</button>
                {inputVisible ? input : null}
            <ul id='modal-list-container'>
                {props.lists.map(item => {
                    return (
                        <li key={item.name} className='modal-list-item'>
                            <div>
                                <h2>{item.name}</h2>
                                <button onClick={() => {setDeleteIndex(item.index); showDeleteConfirmation()}}>Delete List</button>
                                <button onClick={() => props.moveList('up', item.index)}>Move Up</button>
                                <button onClick={() => props.moveList('down', item.index)}>Move Down</button>
                            </div>
                        </li>
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
