import React, { useState, useEffect } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import SearchResults from './components/SearchResults/SearchResults';
import GameList from './components/GameList/GameList';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const defaultLists = [
	{ name: 'Owned', linkRoute: 'owned', contents: [], index: 0 },
	{ name: 'Completed', linkRoute: 'completed', contents: [], index: 1 },
	{ name: 'Currently Playing', linkRoute: 'currently-playing', contents: [], index: 2 },
	{ name: 'Wishlist', linkRoute: 'wishlist', contents: [], index: 3 },
	{ name: 'Backlog', linkRoute: 'backlog', contents: [], index: 4 }
];

const checkLocalStorage = (storageName, noItem = false) => {
	return (
		noItem ? window.localStorage && !window.localStorage.getItem(storageName) :
			window.localStorage && window.localStorage.getItem(storageName)
	);
};

const initializeLocalStorageState = (storageName, defaultValue) => {
	return checkLocalStorage(storageName) ?
		JSON.parse(window.localStorage.getItem(storageName)) : defaultValue;
};

const App = () => {
	const [currentPage, setCurrentPage] = useState(String(document.URL.match(/[^/]+(?=\/$|$)/)));
	const [searchData, setSearchData] = useState('');
	const [searchInput, setSearchInput] = useState('');
	const [showImages, setShowImages] = useState(initializeLocalStorageState('showImages', true));
	const [lists, setLists] = useState(initializeLocalStorageState('lists', defaultLists));
	const [games, setGames] = useState(initializeLocalStorageState('games', {}));
	const [showSidebar, setShowSidebar] = useState(false);

	useEffect(() => {
		if (checkLocalStorage('lists', true)) {
			window.localStorage.setItem('lists', JSON.stringify(defaultLists));
		}

		if (checkLocalStorage('games', true)) {
			window.localStorage.setItem('games', JSON.stringify({}));
		}

		if (checkLocalStorage('showImages', true)) {
			window.localStorage.setItem('showImages', JSON.stringify(true));
		}
	}, []);

	const setLocalStorageData = (value, lsString, setState) => {
		if (checkLocalStorage(lsString)) {
			window.localStorage.setItem(lsString, JSON.stringify(value));
			setState(JSON.parse(window.localStorage.getItem(lsString)));
		} else {
			setState(value);
		}
	};

	const showListImages = (value) => {
		setLocalStorageData(value, 'showImages', setShowImages);
	};

	const setListData = (value) => {
		setLocalStorageData(value, 'lists', setLists);
	};

	const setGamesList = (value) => {
		setLocalStorageData(value, 'games', setGames);
	};

	const setSidebarVisibility = () => {
		setShowSidebar(!showSidebar);
	};

	const hideSidebar = () => {
		setShowSidebar(false);
	};

	const addGameToList = (gameName, listName) => {
		const newLists = JSON.parse(JSON.stringify(lists));

		for (let i = 0; i < newLists.length; i++) {
			if (newLists[i].name === listName) {
				const gameList = [];
				newLists[i].contents.forEach(item => {
					gameList.push(item.name);
				});

				if (gameList.indexOf(gameName) === -1) {
					newLists[i].contents.push({ name: gameName, index: newLists[i].contents.length });
					setListData(newLists);
				}
			}
		}
	};

	const addGameInformation = (gameName, gameTitle, date, rating, consoles, image) => {
		const newGames = JSON.parse(JSON.stringify(games));
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
			setGamesList(newGames);
		}
	};

	const changeGameListItem = (command, listIndex, index) => {
		if ((command === 'up' && index === 0) || (command === 'down' && index === lists.length - 1)) {
			return;
		}

		let newList = JSON.parse(JSON.stringify(lists));
		let filteredList = newList[listIndex];

		// Grabs list item based on index value
		const changingItem = filteredList.contents.splice(index, 1)[0];

		// Runs function based on command
		if (command === 'up' || command === 'down') {
			let newGameList = moveItem(command, filteredList.contents, changingItem, index);
			filteredList.contents = newGameList;
		}

		// Resets index values of game list
		for (let i = 0; i < filteredList.contents.length; i++) {
			filteredList.contents[i].index = i;
		}
		newList[listIndex].contents = filteredList.contents;
		setListData(newList);
	};

	const moveList = (direction, index) => {
		if ((direction === 'up' && index === 0) || (direction === 'down' && index === lists.length - 1)) {
			return;
		}

		let newLists = JSON.parse(JSON.stringify(lists));
		const changingList = newLists.splice(index, 1)[0];
		newLists = moveItem(direction, newLists, changingList, index);

		for (let i = 0; i < newLists.length; i++) {
			newLists[i].index = i;
		}
		setListData(newLists);
	};

	const moveItem = (direction, list, item, index) => {
		if (direction === 'up' && index > 0) {
			list.splice(index - 1, 0, item);
		} else if (direction === 'down' && index < list.length) {
			list.splice(index + 1, 0, item);
		} else {
			list.splice(index, 0, item);
		}
		return list;
	};

	const createNewList = (name, contents) => {
		const trimmedName = name.trim();

		return ({
			name: trimmedName,
			linkRoute: trimmedName.toLowerCase().split(' ').join('-'),
			contents: contents || [],
			index: lists.length
		});
	};

	const addNewList = (name, contents) => {
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
			newLists.push(createNewList(name, contents));
			setListData(newLists);
		}
	};

	const deleteList = (index) => {
		const newLists = [...lists];
		newLists.splice(index, 1);

		for (let i = 0; i < newLists.length; i++) {
			newLists[i].index = i;
		}

		setListData(newLists);
	};

	const copyList = (name, listContents) => {
		addNewList(name, listContents);
	};

	const renameList = (newName, index) => {
		const trimmedName = newName.trim();

		if (trimmedName === '') {
			return;
		}

		const newLists = [...lists];

		newLists[index].name = trimmedName;
		newLists[index].linkRoute = trimmedName.toLowerCase().split(' ').join('-');
		setListData(newLists);
	};

	const mergeLists = (mergingLists) => {
		const [listIndexToMerge, mergedList] = mergingLists;
		let mergedListIndex = 0;
		let newLists = JSON.parse(JSON.stringify(lists));
		let combinedContents = new Set();

		for (let list of newLists) {
			if (list.name === mergedList) {
				mergedListIndex = list.index;
			}
		}

		for (let item of newLists[mergedListIndex].contents) {
			combinedContents.add(item.name);
		}

		for (let item of newLists[listIndexToMerge].contents) {
			combinedContents.add(item.name);
		}

		newLists[mergedListIndex].contents = [...combinedContents].map((item, index) => {
			return {
				name: item,
				index: index
			};
		});

		setListData(newLists);
	};

	return (
		<div className="App">
			<Router basename='/vg-lists'>
				<Header setData={setSearchData} setSidebar={setSidebarVisibility} />
				<Sidebar
					lists={lists}
					add={addNewList}
					delete={deleteList}
					copy={copyList}
					rename={renameList}
					merge={mergeLists}
					showSidebar={showSidebar}
					hide={hideSidebar}
					moveList={moveList}
					currentPage={currentPage}
					changeHighlight={setCurrentPage}
					showImages={showImages}
					setShowImages={showListImages}
				/>
				<div id="main-container">
					<Switch>
						<Route exact path="/">
							<Home lists={lists} changeHighlight={setCurrentPage} />
						</Route>
						<Route path="/search">
							<SearchResults
								lists={lists}
								games={games}
								add={addGameToList}
								data={searchData}
								setData={setSearchData}
								searchInput={searchInput}
								setInput={setSearchInput}
								setGames={setGamesList}
								addGameInfo={addGameInformation}
								changeHighlight={setCurrentPage}
								showImages={showImages}
							/>
						</Route>
						<Route
							path="/:name"
							render={(props) => (
								<GameList
									changeItem={changeGameListItem}
									lists={lists}
									add={addGameToList}
									games={games}
									setGames={setGamesList}
									showImages={showImages}
									{...props}
								/>
							)}
						/>
					</Switch>
				</div>
				<footer>All data gathered from RAWG - <a href="https://www.rawg.io" target="_blank" rel="noopener noreferrer">RAWG.io</a></footer>
			</Router>
		</div>
	);
};

export default App;
