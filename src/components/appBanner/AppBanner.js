import React from 'react';
import avangers from '../../assets/Avengers.png'
import avangersLogo from '../../assets/Avengers_logo.png'
import './appBanner.scss'

const AppBanner = () => {
    return (
        <div className="app__banner">
            <img src={avangers} alt="Avangers"/>
            <div className="app__banner-text">
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src={avangersLogo} alt="Avangers logo"/>
        </div>
    );
};

export default AppBanner;