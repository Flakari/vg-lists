import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = (props) => {
    useEffect(() => {
        props.changeHighlight('');
    }, [props]);

    return (
        <div id='home-container'>
            <h2>Add video games to lists!</h2>
            <h3>Your Lists:</h3>
            <ul>
                {props.lists.map(item => {
                    return (
                        <Link to={`/${item.linkRoute}`} key={item.name}>
                            <li>{item.name}</li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default Home;
