import React, { useState, useEffect } from 'react';

const Sidebar = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [inputVisible, setInputVisible] = useState(false);
    const [navigation, setNavigation] = useState([]);

    const inputChangeHandler = (input) => {
        setInputValue(input.target.value);
    };

    const buttonClickHandler = () => {
        setInputVisible(!inputVisible);
    }

    useEffect(() => {
        setNavigation(props.lists.map(item => {
            return <li key={item.name}>{item.name}</li>
        }))
    }, [props.lists]);

    const input = (
        <form onSubmit={e => { e.preventDefault(); props.add(inputValue); setInputVisible(false); setInputValue('')}}>
            <input type="text" value={inputValue} onChange={inputChangeHandler}></input>
            <input type="submit" value="Submit"></input>
        </form>
    );

    return (
        <div id="sidebar">
            <button onClick={buttonClickHandler}>{inputVisible ? 'Cancel' : 'Add List'}</button>
            {inputVisible ? input : null}
            <nav>
                <ul>
                    {navigation}
                </ul>
            </nav>
        </div>
    )
};

export default Sidebar;