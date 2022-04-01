import React from 'react';
import './step.css';

const Step = ({step, todoData, setTodoData}) =>{

    const onCheckStep = () =>{
        const newTodoData = todoData.map(e => {
            const newStep = e.steps.map(s => (
                s.id===step.id ? {...step, completed: !step.completed} : s)
            );
            return {...e, steps: newStep}
        })
        setTodoData(newTodoData);
    }

    return(<>
        <span>{step.name}</span>
        <input type='checkbox' checked={step.completed} onChange={onCheckStep} /> 
        <br/>
    </>)
}

export default Step;