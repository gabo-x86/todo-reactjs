import React from 'react';
import './step.css';

const Step = ({step, todoData, setTodoData}) =>{

    const onCheckStep = () =>{
        const newStep = todoData.map(e => {
            return e.steps.map(s => s.id===step.id ? {...step, completed: !step.completed} : s);
        }
        setTodoData(newStep);
    }

    return(<>
        <span>{step.name}</span>
        <input type='checkbox' checked={step.completed} onChange={onCheckStep} /> 
        <br/>
    </>)
}

export default Step;