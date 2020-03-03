import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';

const SearchResults = (props) => {
    const [dataDisplay, setDataDisplay] = useState([]);
    const [input, setInput] = useState('');
  	const [inputDisplay, setInputDisplay] = useState(props.searchInput || '');
    
    useEffect(() => {
		setDataDisplay([...props.data].map(item => (
      		<ListItem
				key={item.id}
				name={item.name}
				add={props.add}
                list={props.lists}
                type="search"
			/>
    	)));
    }, [props.data, props.lists, props.add]);
      
    const searchSubmitHandler = async () => {
		console.log(input.split(' ').join('-'));
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
			props.setData(response.results);
		})
		.catch(err => {
			console.log(err);
		});
	}

    useEffect(() => {
		for (let i = 0; i < props.lists.length; i++) {
			console.table(props.lists[i].name, props.lists[i].contents);
		}
	}, [props.lists]);

	const inputChangeHandler = (input) => {
		setInput(input.target.value);
	}

    return (
        <>
            <form onSubmit={e => { e.preventDefault(); searchSubmitHandler(); setInputDisplay(input.trim()); props.setInput(input.trim()) }}>
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
        </>
    );
};

export default SearchResults;