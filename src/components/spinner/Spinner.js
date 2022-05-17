import React from 'react';
import spinner from '../../assets/loading.gif'

const Spinner = () => {
    return (
        <img
            style={{margin: '0 auto'}}
            src={spinner}
            alt="spinner"/>
    );
};

export default Spinner;