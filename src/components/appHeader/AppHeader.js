import React from 'react';
import './appHeader.scss'
import logo from '../../assets/logo.png'

const AppHeader = () => {
    return (
        <header className="app__header">
            <div className="app__logo">
                <a href="#">
                    <img src={logo} alt=""/>
                </a>
            </div>
            <nav className="app__menu">
                <ul>
                    <li><a href="#">Characters</a></li>
                    /
                    <li><a href="#">Comics</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default AppHeader;