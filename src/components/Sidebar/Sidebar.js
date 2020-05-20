import React, { useState, useEffect } from 'react';
import './Sidebar.scss';
import Modal from '../Modal/Modal';
import ListModal from '../ListModal/ListModal';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    const [navigation, setNavigation] = useState([]);
    const [showListModal, setShowListModal] = useState(false);

    const showModal = () => {
        setShowListModal(true);
    };

    const hideModal = () => {
        setShowListModal(false);
    };

    useEffect(() => {
        setNavigation(props.lists.map(item => {
            const linkName = item.linkRoute;
            return (
                <Link to={`/${linkName}`} key={item.name} onClick={() => {props.hide(); props.changeHighlight(linkName)}}>
                    <li
                        className={props.currentPage === linkName ? 'active' : null}
                    >
                        {`${item.name} [${item.contents.length}]`}
                    </li>
                </Link>
            );
        }));
    }, [props.lists, props.hide, props.currentPage, props]);

    return (
        <>
            <div id="sidebar" className={props.showSidebar ? 'visible' : null}>
                <div id="manage-lists" onClick={showModal}>
                    <img src={require('../../images/gear.svg')} alt="" /><p>Manage Lists</p>
                </div>
                <h2>Your Lists:</h2>
                {props.lists.length === 0 ? <p>Add a list to see it here!</p> : 
                    <>
                        <nav>
                            <ul>
                                {navigation}
                            </ul>
                        </nav> 
                    </>
                }
                <div id="show-images">
                    <p>Toggle Tile Images:</p>
                    <div id="toggle" onClick={() => props.setShowImages(!props.showImages)} className={props.showImages ? 'on' : 'off'}>
                        <button id="toggle-button"></button>
                    </div>
                </div>
            </div>
            {showListModal ? (
                <Modal modalClass={'list-modal'} showModal={showListModal} hideModal={hideModal}>
                    <ListModal lists={props.lists} add={props.add} delete={props.delete} copy={props.copy} rename={props.rename} merge={props.merge} moveList={props.moveList} hideModal={hideModal}/>
                </Modal>
            ) : null}
        </>
    )
};

export default Sidebar;
