import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [data, setData] = useState('');
  const [dataDisplay, setDataDisplay] = useState([]);

  useEffect(() => {
    setDataDisplay([...data].map(item => (
      <li key={item.id}>{item.name}</li>
    )));
  }, [data])

  const inputChangeHandler = (input) => {
    setInput(input.target.value);
  }

  const searchSubmitHandler = () => {
    console.log(input.split(' ').join('-'))
    fetch(`https://api.rawg.io/api/games?search=${input.split(' ').join('-')}`, {
	    "method": "GET",
	    "headers": {
		    "User-Agent": "https://github.com/Flakari/vg-lists/"
	    }
    })
    .then(response => {
	    return response;
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response.results);
      setData(response.results);
    })
    .catch(err => {
	    console.log(err);
    });
  }

  return (
    <div className="App">
      <form onSubmit={e => { e.preventDefault(); searchSubmitHandler() }}>
        <input type="text" onChange={inputChangeHandler} value={input}/>
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {dataDisplay}
      </ul>
      <footer>All data gathered from RAWG - <a href="https://www.rawg.io" target="_blank" rel="noopener noreferrer">RAWG.io</a></footer>
    </div>
  );
}

export default App;
