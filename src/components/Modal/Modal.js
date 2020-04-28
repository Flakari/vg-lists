import React from 'react';
import './Modal.scss';

const Modal = (props) => {
    return (
        <div className={`modal ${props.showModal ? 'visible' : null}`} onClick={() => props.toggle(false)}>
            <div className='modal-container' onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
};

export default Modal;
