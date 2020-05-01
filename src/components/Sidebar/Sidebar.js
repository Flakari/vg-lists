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
                <li key={item.name}>
                    <Link to={`/${linkName}`}>{`${item.name} [${item.contents.length}]`}</Link>
                </li>
            );
        }));
    }, [props.lists]);

    return (
        <>
            <div id="sidebar" className={props.showSidebar ? 'visible' : null}>
                <Link to={'/'}>Search</Link>
                <nav>
                    <ul>
                        {navigation}
                    </ul>
                </nav>
                <button onClick={showModal}>Show Modal</button>
            </div>
            <Modal modalClass={'list-modal'} showModal={showListModal} hideModal={hideModal}>
                <ListModal lists={props.lists} add={props.add} delete={props.delete}/>
            </Modal>
        </>
    )
};

export default Sidebar;
