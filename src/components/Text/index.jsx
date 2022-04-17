import React from "react";
import './text.css';

const Text = ({children, textType}) =>{
    switch (textType){
        case 'title':
            return(<h2 className='text-title'>{children}</h2>)
        break;

        case 'paragraph':
            return(<p className='text-paragraph--labeled'>{children}</p>)
        break;

        case 'buttonLabel':
            return(<p className='text-button'>{children}</p>)
        break;

        default:
            return(<></>);
        break;
    }

}

export default Text;