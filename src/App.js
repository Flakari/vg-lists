import React, { useState } from 'react';
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

	const setData = (data) => {
    	setSearchData(data);
    }

	const setInput = (input) => {
		setSearchInput(input);
	}

	const addGameToList = (lists, game, listName) => {
		const newLists = [...lists];
		for (let i = 0; i < newLists.length; i++) {
			if (newLists[i].name === listName && newLists[i].contents.indexOf(game) === -1) {
				newLists[i].contents.push(game);
			}
		}
		setLists(newLists);
	}

	const addNewList = (name) => {
		const newLists = [...lists];
		newLists.push({
			name: name.trim(),
			linkRoute: name.toLowerCase().split(' ').join('-'),
			contents: []
		});
		setLists(newLists);
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
								add={addGameToList} 
								data={searchData} 
								setData={setData}
								searchInput={searchInput}
								setInput={setInput}
							/>
						</Route>
						<Route path="/:name" render={(props) => <GameList lists={lists} {...props} />} />
					</Switch>
				</div>
			</Router>
    	</div>
  );
};

export default App;
