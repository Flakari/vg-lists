import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <h1>VG Lists</h1>
            <p>Add video games to lists!</p>
            <h2>Your Lists:</h2>
            <ul>
                {props.lists.map(item => {
                    return (
                        <li key={item.name}>
                            <Link to={`/${item.linkRoute}`}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Home;
