import React, { useState, useEffect } from 'react';
import './App.css';
import ListItem from './ListItem/ListItem';
import Sidebar from './Sidebar/Sidebar';

const App = () => {
	const [input, setInput] = useState('');
  	const [inputDisplay, setInputDisplay] = useState('');
  	const [data, setData] = useState('');
  	const [dataDisplay, setDataDisplay] = useState([]);
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

	useEffect(() => {
		setDataDisplay([...data].map(item => (
      		<ListItem
				key={item.id}
				name={item.name}
				add={addGameToList}
				list={lists}
			/>
    	)));
  	}, [data, lists]);

	useEffect(() => {
		for (let i = 0; i < lists.length; i++) {
			console.table(lists[i].name, lists[i].contents);
		}
	}, [lists]);

	const inputChangeHandler = (input) => {
		setInput(input.target.value);
	}

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
			name: name,
			contents: []
		});
		setLists(newLists);
	};

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
      		<header></header>
      		<Sidebar lists={lists} add={addNewList}/>
			<div id="main-container">
				<form onSubmit={e => { e.preventDefault(); searchSubmitHandler(); setInputDisplay(input); }}>
					<input type="text" onChange={inputChangeHandler} value={input} />
					<input type="submit" value="Submit" />
				</form>
				{dataDisplay.length === 0 ? null : (
					<>
						<h1>Results for {inputDisplay}...</h1>
						<ul id="search-results">
						{dataDisplay}
						</ul>
					</>)}
				<footer>All data gathered from RAWG - <a href="https://www.rawg.io" target="_blank" rel="noopener noreferrer">RAWG.io</a></footer>
			</div>
    </div>
  );
};

export default App;
