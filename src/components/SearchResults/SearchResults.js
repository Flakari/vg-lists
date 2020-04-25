import React from 'react';
import SearchResult from '../SearchResult/SearchResult';

const SearchResults = (props) => {
    return (
        <>
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
								/>
							);
						})}
                    </ul>
                </>)}
            <footer>All data gathered from RAWG - <a href="https://www.rawg.io" target="_blank" rel="noopener noreferrer">RAWG.io</a></footer>
        </>
    );
};

export default SearchResults;
