import React from "react";

const InputText = ({inputValue, onInputChange}) =>{

    return(
        <input type="text" value={inputValue} onChange={onInputChange} />
    )
}

export default InputText;