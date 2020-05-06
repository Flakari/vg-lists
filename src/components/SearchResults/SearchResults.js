import React, { useState, useEffect } from 'react';
import SearchResult from '../SearchResult/SearchResult';

const SearchResults = (props) => {
	const [quickAddOptions, setQuickAddOptions] = useState([]);
	const [quickAddSelection, setQuickAddSelection] = useState('---');

    const onChangeHandler = (e) => {
        setQuickAddSelection(e.target.value);
    };

	useEffect(() => {
        props.changeHighlight('');
    }, [props]);

    useEffect(() => {
        setQuickAddOptions(props.lists.map(item => {
            return <option key={item.name} value={item.name}>{item.name}</option>
        }));
    }, [props.lists]);

    return (
        <>
			<p>Quick Add:</p>
			<select onChange={onChangeHandler}>
                <option>---</option>
                {quickAddOptions}
            </select>
            {props.data.length === 0 ? null : (
                <>
                    <ul id="search-results">
						{props.data.map(item => {
							const itemConsoles = props.games.hasOwnProperty(item.slug) ? props.games[item.slug].consoles : item.platforms;
							return (
								<SearchResult
									key={item.id}
									name={item.slug}
									title={item.name}
									date={item.released}
									consoles={itemConsoles}
									add={props.add}
									lists={props.lists}
									games={props.games}
									setGames={props.setGames}
									addGameInfo={props.addGameInfo}
									image={item['background_image']}
									quickAdd={quickAddSelection}
								/>
							);
						})}
                    </ul>
                </>)}
        </>
    );
};

export default SearchResults;
