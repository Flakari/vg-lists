import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './ListModal.scss';

const ListModal = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [inputVisible, setInputVisible] = useState(false);

    const inputChangeHandler = (input) => {
        setInputValue(input.target.value);
    };

    const inputVisibility = () => {
        setInputVisible(!inputVisible);
    };

    const deleteItem = (index) => {
        if (String(document.URL.match(/[^/]+(?=\/$|$)/)) === props.lists[index].linkRoute) {
		    props.history.push('/');
        }
        props.delete(index);
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
                                <button onClick={() => deleteItem(item.index)}>Delete List</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default withRouter(ListModal);
