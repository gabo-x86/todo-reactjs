import React from "react";

const InputText = ({inputType, fieldName, inputValue, onInputChange}) =>{

    switch(inputType){
        case 'text':
            return( <input type='text' value={inputValue} onChange={onInputChange} placeholder={fieldName}/> )
        break;

        case 'paragraph':
            return( <textarea value={inputValue} onChange={onInputChange} placeholder={fieldName}/> )
        break;

        default:
            return(<></>)
    }
    
}

export default InputText;