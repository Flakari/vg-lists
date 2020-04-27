import React from 'react';
import './Header.scss';
import Searchbar from '../Searchbar/Searchbar';

const Header = (props) => {
    return (
        <header>
            <button><img src={require("../../images/Hamburger_icon.svg")} alt=""></img></button>
            <p>VG Lists</p>
            <div id="search-container">
                <Searchbar setData={props.setData}/>
            </div>
            <button><img src={require("../../images/magnifying-glass.svg")} alt="Search"></img></button>
            <div id="mobile-search-container">
                <Searchbar setData={props.setData}/>
            </div>
        </header>
    );
};

export default Header;
