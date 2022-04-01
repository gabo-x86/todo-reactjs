import React from 'react';

import './button.css';

const Button = ({textName, onAddTask}) =>{

    return(
        <>
        <button onClick={onAddTask}>{textName}</button>
        </>
    )
}

export default Button;