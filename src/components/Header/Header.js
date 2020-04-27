import React, { useState } from 'react';
import './Header.scss';
import Searchbar from '../Searchbar/Searchbar';

const Header = (props) => {
    const [showSearch, setShowSearch] = useState(false);

    const toggleMobileSearch = () => {
        setShowSearch(!showSearch);
    }

    return (
        <>
            <header>
                <button><img src={require("../../images/Hamburger_icon.svg")} alt="Toggle Lists"></img></button>
                <p>VG Lists</p>
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
