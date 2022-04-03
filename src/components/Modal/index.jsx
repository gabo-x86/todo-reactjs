import React from "react";
import './modal.css'

const Modal = ({children, isVisible, onVisibleModal}) =>{

    if(isVisible){
        return(<>
            <div className='background-modal' onClick={onVisibleModal}>
                
            </div>

            <div className='modal-container'>                
                <div className='modal'>
                    {children}
                </div>    
            </div>
            
        </>)
    }
    return(<></>)
    
}

export default Modal;