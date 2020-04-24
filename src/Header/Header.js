import React from 'react';
import Searchbar from '../Searchbar/Searchbar';

const Header = (props) => {
    return (
        <header>
            <p>VG Lists</p>
            <Searchbar setData={props.setData}/>
        </header>
    );
};

export default Header;
