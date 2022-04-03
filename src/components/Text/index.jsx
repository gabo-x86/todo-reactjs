import React from "react";

const Text = ({children, textType}) =>{
    switch (textType){
        case 'title':
            return(<h2 className='text-title'>{children}</h2>)
        break;

        case 'paragraph':
            return(<p className='text-paragraph'>{children}</p>)
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