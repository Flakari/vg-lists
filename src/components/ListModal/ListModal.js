import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './ListModal.scss';
import Modal from '../Modal/Modal';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import ListModalItem from '../ListModalItem/ListModalItem';
import TextInput from '../TextInput/TextInput';

const ListModal = (props) => {
    const [showDelete, setShowDelete] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(0);

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

    return (
        <>
            <h1>List Manager</h1>
            <p>Add, delete, copy, reorganize, and even rename lists here! Your one stop shop for video game list management!</p>
            <button id="close-modal" onClick={props.hideModal}><img src={require("../../images/Delete_icon_modal.svg")} alt={'Close modal'} /></button>
            <TextInput
                id='add-list'
                text='Add List'
                inputFunction={props.add}
            />
            <ul id='modal-list-container'>
                {props.lists.map(item => {
                    return (
                        <ListModalItem
                            key={item.name}
                            name={item.name}
                            index={item.index}
                            contents={item.contents}
                            moveList={props.moveList}
                            deleteIndex={setDeleteIndex}
                            showDelete={showDeleteConfirmation}
                            copy={props.copy}
                            merge={props.merge}
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
