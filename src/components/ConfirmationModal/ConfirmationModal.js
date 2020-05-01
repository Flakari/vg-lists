import React from 'react';
import './ConfirmationModal.scss';

const ConfirmationModal = (props) => {
    return (
        <>
            <p>{props.message}</p>
            <button onClick={() => props.func(props.funcArgs)}>Yes</button>
            <button onClick={props.hide}>No</button>
        </>
    );
};

export default ConfirmationModal;
