import React, { useState, useEffect, Fragment } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [dataDisplay, setDataDisplay] = useState([]);

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?search=katamari-damacy", {
	    "method": "GET",
	    "headers": {
		    "User-Agent": "personal-project-vg-lists"
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
  }, []);

  useEffect(() => {
    setDataDisplay([...data].map(item => (
      <li key={item.id}>{item.name}</li>
    )));
  }, [data])

  return (
    <div className="App">
      <ul>
        {dataDisplay}
      </ul>
    </div>
  );
}

export default App;
