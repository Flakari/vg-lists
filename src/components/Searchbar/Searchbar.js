import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Searchbar = (props) => {
	const [input, setInput] = useState('');

	const searchSubmitHandler = () => {
		fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_AUTH_TOKEN}&search=${input.split(' ').join('-')}`, {
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
				props.setData(response.results);
				if (props.hasOwnProperty('toggleSearch')) props.toggleSearch();
			})
			.catch(err => {
				console.log(err);
			});
		props.history.push('/search');
	}

	const inputChangeHandler = (input) => {
		setInput(input.target.value);
	}

	return (
		<form onSubmit={e => { e.preventDefault(); searchSubmitHandler(); }}>
			<input type="text" onChange={inputChangeHandler} value={input} placeholder='Search' />
		</form>
	);
};

export default withRouter(Searchbar);
