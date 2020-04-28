import React, { useState, useEffect } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import SearchResults from './components/SearchResults/SearchResults';
import GameList from './components/GameList/GameList';
import Header from './components/Header/Header';
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
	const [games, setGames] = useState({});
	const [showSidebar, setShowSidebar] = useState(false);

	useEffect(() => {
		console.log(games);
	}, [games]);

	const setData = (data) => {
    	setSearchData(data);
    };

	const setInput = (input) => {
		setSearchInput(input);
	};

	const setGamesList = (games) => {
		setGames(games);
	};

	const setSidebarVisibility = () => {
		setShowSidebar(!showSidebar);
	};

	const addGameToList = (gameName, listName) => {
		const newLists = JSON.parse(JSON.stringify([...lists]));

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

	const addGameInformation = (gameName, gameTitle, date, rating, consoles, image) => {
		const newGames = JSON.parse(JSON.stringify({...games}));
		const tempConsoles = [];
		consoles.forEach(item => {
			const name = !item.hasOwnProperty('platform') ? item.name : item.platform.name;
			tempConsoles.push({
				name: name,
				owned: item.hasOwnProperty('owned') ? item.owned : false
			});
		});
		
		if (newGames[gameName] === undefined) {
			newGames[gameName] = {
				name: gameTitle,
				date: date,
				consoles: tempConsoles,
				rating: rating || null,
				image: image
			}
			setGames(newGames);
		}
	}

	const changeGameListItem = (command, list, index) => {
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
			<Router basename='/vg-lists'>
				<Header setData={setData} setSidebar={setSidebarVisibility}/>
				<Sidebar lists={lists} add={addNewList} showSidebar={showSidebar}/>
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
								setGames={setGamesList}
								addGameInfo={addGameInformation}
							/>
						</Route>
						<Route path="/:name" render={(props) => <GameList changeItem={changeGameListItem} lists={lists} add={addGameToList} games={games} setGames={setGamesList} {...props} />} />
					</Switch>
				</div>
			</Router>
    	</div>
  	);
};

export default App;
