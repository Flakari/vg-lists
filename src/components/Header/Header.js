import React, { useState } from 'react';
import './Header.scss';
import Searchbar from '../Searchbar/Searchbar';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [showSearch, setShowSearch] = useState(false);

    const toggleMobileSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <>
            <header>
                <button onClick={props.setSidebar}><img src={require("../../images/Hamburger_icon.svg")} alt="Toggle Lists"></img></button>
                <Link to='/'>VG Lists</Link>
                <div id="search-container">
                    <Searchbar setData={props.setData} />
                </div>
                <button onClick={toggleMobileSearch}><img src={require("../../images/magnifying-glass.svg")} alt="Search"></img></button>
            </header>
            <div id="mobile-search-container" className={showSearch ? 'visible': null}>
                <Searchbar setData={props.setData} toggleSearch={toggleMobileSearch}/>
            </div>
        </>
    );
};

export default Header;
