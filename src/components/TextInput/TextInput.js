import React, { useState } from 'react';

const TextInput = (props) => {
    const [showInput, setShowInput] = useState(false);
    const [value, setValue] = useState(props.standardInput !== undefined ? props.standardInput : '');
    const [validInput, setValidInput] = useState(true);

    const changeHandler = (e) => {
        setValue(e.target.value);

        if (e.target.value.indexOf('/') !== -1 || e.target.value.indexOf('\\') !== -1) {
            setValidInput(false);
        } else {
            setValidInput(true);
        }
    };

    const submit = (args) => {
        if (!validInput) { return }

        setShowInput(false);
        setValue('');

        if (args !== undefined) {
            props.inputFunction(value, args);
        } else {
            props.inputFunction(value);
        }
    }

    const inputVisibility = () => {
        setShowInput(!showInput);
    };

    const input = (
        <form onSubmit={e => { e.preventDefault(); submit(props.args); }}>
            <input className={!validInput && 'invalid'} id={props.id} type="text" value={value} onChange={changeHandler} autoFocus></input>
            <input type="submit" value="Submit"></input>
            {validInput ? null : <p class="invalid-text">Invalid Input: Cannot use / or \ in list name!</p>}
        </form>
    );
    return (
        <div>
            <button onClick={inputVisibility}>{showInput ? 'Cancel' : props.text}</button>
            {showInput ? input : null}
        </div>
    );
};

export default TextInput;
