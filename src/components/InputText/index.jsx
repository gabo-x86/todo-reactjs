import React from "react";
import './inputText.css';

const InputText = ({inputType, fieldName, inputValue, onInputChange}) =>{

    switch(inputType){
        case 'text':
            return( <input 
                        type='text'
                        value={inputValue}
                        onChange={onInputChange}
                        placeholder={fieldName}
                        className='input-text'
            /> )
        break;

        case 'paragraph':
            return( <textarea 
                        value={inputValue} 
                        onChange={onInputChange}
                        placeholder={fieldName}
                        className='input-textarea'
            /> )
        break;

        default:
            return(<></>)
    }
    
}

export default InputText;