import React from 'react';
import errormessage from './errormessage.gif'

const ErrorMessage = () => {
    return (
        <img src={errormessage} alt="" style={{ display: 'block', width: "300px", height: "300px",objectFit: 'contain', margin: "0 auto"}} />
    );
};

export default ErrorMessage;