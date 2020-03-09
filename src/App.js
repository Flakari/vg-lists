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
			console.log([listName, newLists[i].name]);
			if (newLists[i].name === listName) {
				const gameList = [];
				newLists[i].contents.forEach(item => {
					gameList.push(item.name);
				});

				if (gameList.indexOf(game) === -1) {
					newLists[i].contents.push({name: game, index: newLists[i].contents.length});
					setLists(newLists);
				}
			} 
		}
	}

	const deleteGameFromList = (lists, list, index) => {
		let listIndex = 0;
		let newList = JSON.parse(JSON.stringify([...lists]));
		let changedList = newList.filter((item, index) => {
			if (item.name === list) listIndex = index;
            return item.name === list;
		})[0];
		console.log(listIndex);
		changedList.contents.splice(index, 1);
		for (let i = 0; i < changedList.contents.length; i++) {
			changedList.contents[i]['index'] = i;
		}
		newList[listIndex].contents = changedList.contents;
		setLists(newList);
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
						<Route path="/:name" render={(props) => <GameList deleteItem={deleteGameFromList} lists={lists} {...props} />} />
					</Switch>
				</div>
			</Router>
    	</div>
  );
};

export default App;
