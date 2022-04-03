import React from 'react';

import './button.css';

const Button = ({textName, onClickHandler}) =>{

    return(
        <>
        <button onClick={onClickHandler}>{textName}</button>
        </>
    )
}

export default Button;