import React, { useState, useEffect } from 'react';
import './Sidebar.scss';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [inputVisible, setInputVisible] = useState(false);
    const [navigation, setNavigation] = useState([]);
    const [showListModal, setShowListModal] = useState(false);

    const inputChangeHandler = (input) => {
        setInputValue(input.target.value);
    };

    const inputVisibility = () => {
        setInputVisible(!inputVisible);
    };

    const toggleListModal = (state) => {
        setShowListModal(state);
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

    const input = (
        <form onSubmit={e => { e.preventDefault(); props.add(inputValue); setInputVisible(false); setInputValue('')}}>
            <input id="list-input" type="text" value={inputValue} onChange={inputChangeHandler} autoFocus></input>
            <input type="submit" value="Submit"></input>
        </form>
    );

    return (
        <>
            <div id="sidebar" className={props.showSidebar ? 'visible' : null}>
                <Link to={'/'}>Search</Link>
                <button onClick={inputVisibility}>{inputVisible ? 'Cancel' : 'Add List'}</button>
                {inputVisible ? input : null}
                <nav>
                    <ul>
                        {navigation}
                    </ul>
                </nav>
                <button onClick={() => toggleListModal(true)}>Show Modal</button>
            </div>
            <Modal showModal={showListModal} toggle={toggleListModal}>
                <>
                    <h1>Test!</h1>
                    <p>This is a modal test</p>
                    <ul>
                        <li>Test 1</li>
                        <li>Test 2</li>
                    </ul>
                </>
            </Modal>
        </>
    )
};

export default Sidebar;
