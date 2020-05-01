import React from 'react';
import './Modal.scss';

const Modal = (props) => {
    return (
        <div className={`modal ${props.showModal ? 'visible' : null}`} onClick={props.hideModal}>
            <div className={`modal-container ${props.modalClass}`} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
};

export default Modal;
