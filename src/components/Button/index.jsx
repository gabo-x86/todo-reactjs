import React from 'react';

import './button.css';

const Button = ({buttonType, textName, onClickHandler}) =>{

    return(
        <>
        <button  className={`button-${buttonType}`} onClick={onClickHandler}>{textName}</button>
        </>
    )
}

export default Button;