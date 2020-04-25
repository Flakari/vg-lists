import React from 'react';
import Searchbar from '../Searchbar/Searchbar';

const Header = (props) => {
    return (
        <header>
            <p>VG Lists</p>
            <Searchbar setData={props.setData}/>
            <img src={require("../../images/magnifying-glass.svg")} alt="Search"></img>
        </header>
    );
};

export default Header;
