import React, { useState } from 'react';

const TextInput = (props) => {
    const [showInput, setShowInput] = useState(false);
    const [value, setValue] = useState('');
    const [validInput, setValidInput] = useState(true);

    const changeHandler = (e) => {
        setValue(e.target.value);

        if (e.target.value.indexOf('/') !== -1 || e.target.value.indexOf('\\') !== -1) {
            setValidInput(false);
        } else {
            setValidInput(true);
        }
    };

    const submit = () => {
        if (!validInput) { return }

        setShowInput(false);
        setValue('');
        console.log(value);
    }

    const inputVisibility = () => {
        setShowInput(!showInput);
    };

    const input = (
        <form onSubmit={e => { e.preventDefault(); submit(); }}>
            <input type="text" value={value} onChange={changeHandler} autoFocus></input>
            <input type="submit" value="Submit"></input>
        </form>
    );
    return (
        <>
            <button onClick={inputVisibility}>{showInput ? 'Cancel' : 'Console Log'}</button>
            {showInput ? input : null}
            {validInput ? <p>Valid Input</p> : <p>Invalid Input</p>}
        </>
    );
};

export default TextInput;
