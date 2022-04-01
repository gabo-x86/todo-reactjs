import React from "react";
import './arrow.css'
const Arrow = ({direction, onClickHandler}) =>{
    return(
        <span className={`arrow-icon ${direction}`} onClick={onClickHandler}></span>
    )
}

export default Arrow;