import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import SearchResults from './SearchResults/SearchResults';
import GameList from './GameList/GameList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	const [searchData, setSearchData] = useState('');
	const [searchInput, setSearchInput] = useState('');
  	const [lists, setLists] = useState([
		{
			name: 'Test',
			linkRoute: 'test',
			contents: []
		},
		{
			name: 'Other',
			linkRoute: 'other',
			contents: []
		}
	]);
	const [games, setGames] = useState({
		test: {
			name: 'Test Game',
			date: '2013-09-17',
			consoles: [],
			rating: null
		}
	});  

	useEffect(() => {
		const tempGames = JSON.parse(JSON.stringify(games));
		tempGames['new-game'] = {
			name: 'New Game',
			date: '2020-04-19',
			consoles: [],
			rating: null
		};
		setGames(tempGames);
		console.log(games['test']);
	}, []);

	useEffect(() => {
		console.log(games);
	}, [games]);

	const setData = (data) => {
    	setSearchData(data);
    }

	const setInput = (input) => {
		setSearchInput(input);
	}

	const addGameToList = (lists, games, gameName, gameTitle, date, rating, consoles, listName) => {
		const newLists = JSON.parse(JSON.stringify([...lists]));
		const newGames = JSON.parse(JSON.stringify({...games}));

		if (newGames[gameName] === undefined) {
			newGames[gameName] = {
				name: gameTitle,
				date: date,
				consoles: [],
				rating: null
			}
			setGames(newGames);
		}

		for (let i = 0; i < newLists.length; i++) {
			console.log([listName, newLists[i].name]);
			if (newLists[i].name === listName) {
				const gameList = [];
				newLists[i].contents.forEach(item => {
					gameList.push(item.name);
				});

				if (gameList.indexOf(gameName) === -1) {
					newLists[i].contents.push({name: gameName, index: newLists[i].contents.length});
					setLists(newLists);
				}
			} 
		}
	}

	const changeGameListItem = (command, lists, list, index) => {
		let listIndex;
		let newList = JSON.parse(JSON.stringify([...lists]));

		// Filters list being worked on
		let filteredList = newList.filter((item, index) => {
			if (item.name === list) listIndex = index;
            return item.name === list;
		})[0];

		// Grabs list item based on index value
		const changingItem = filteredList.contents.splice(index, 1)[0];

		// Runs function based on command
		if (command === 'up' || command === 'down') {
			let newList = moveListItem(command, filteredList.contents, changingItem, index);
			filteredList.contents = newList;
		}

		// Resets index values of game list
		for (let i = 0; i < filteredList.contents.length; i++) {
			filteredList.contents[i]['index'] = i;
		}
		newList[listIndex].contents = filteredList.contents;
		setLists(newList);
	};
	
	const moveListItem = (direction, list, item, index) => {
		if (direction === 'up' && index > 0) {
			list.splice(index - 1, 0, item);
		} else if (direction === 'down' && index < list.length) {
			list.splice(index + 1, 0, item);
		} else {
			list.splice(index, 0, item);
		}
		return list;
	}

	const addNewList = (name) => {
		const trimmedName = name.trim();
		if (trimmedName === '') {
			return;
		}

		const listNames = [];
		lists.forEach(item => {
			listNames.push(item.name.toLowerCase());
		});

		if (listNames.indexOf(trimmedName.toLowerCase()) === -1) {
			const newLists = [...lists];
			newLists.push({
				name: trimmedName,
				linkRoute: trimmedName.toLowerCase().split(' ').join('-'),
				contents: []
			});
			setLists(newLists);
		}
	};

  	return (
    	<div className="App">
			<Router>
				<header></header>
				<Sidebar lists={lists} add={addNewList}/>
				<div id="main-container">
					<Switch>
						<Route exact path="/">
							<SearchResults 
								lists={lists}
								games={games}
								add={addGameToList} 
								data={searchData} 
								setData={setData}
								searchInput={searchInput}
								setInput={setInput}
							/>
						</Route>
						<Route path="/:name" render={(props) => <GameList changeItem={changeGameListItem} lists={lists} add={addGameToList} games={games} {...props} />} />
					</Switch>
				</div>
			</Router>
    	</div>
  	);
};

export default App;
