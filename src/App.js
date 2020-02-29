import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import SearchResults from './SearchResults/SearchResults';

const App = () => {
  	const [lists, setLists] = useState([
		{
			name: 'Test',
			contents: []
		},
		{
			name: 'Other',
			contents: []
		}
  	]);

	const addGameToList = (lists, game, listName) => {
		const newLists = [...lists];
		for (let i = 0; i < newLists.length; i++) {
			if (newLists[i].name === listName) {
				if (newLists[i].contents.indexOf(game) === -1) {
					newLists[i].contents.push(game);
				}
			}
		}
		setLists(newLists);
	}

	const addNewList = (name) => {
		const newLists = [...lists];
		newLists.push({
			name: name.trim(),
			contents: []
		});
		setLists(newLists);
	};

  	return (
    	<div className="App">
      		<header></header>
      		<Sidebar lists={lists} add={addNewList}/>
			<SearchResults lists={lists} add={addGameToList}/>
    	</div>
  );
};

export default App;
