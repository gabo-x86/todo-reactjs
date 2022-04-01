import React from 'react';
import './step.css';

const Step = ({step, onCheckStep}) =>{
    return(<>
        <span>{step.name}</span>
        <input type='checkbox' checked={step.completed} onChange={() => onCheckStep(step.id)} /> 
        <br/>
    </>)
}

export default Step;