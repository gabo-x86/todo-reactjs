import React, { useState } from "react";
import Arrow from "../../../../components/Arrow";
import Step from '../Step'
import './task.css'

const Task = ({task, todoData, setTodoData}) =>{
    const [showDetail, setShowDetail] = useState(false);

    const showTaskDetail = () =>{
        setShowDetail(!showDetail);

    }

    const onCheckTask  = () =>{
        const newTodoData = todoData.map(e => e.id===task.id ? {...task, completed:!task.completed} : e)
        setTodoData(newTodoData);
    }

    return(
        <>        
            <div className='task'>
                <Arrow direction={showDetail?'arrow--up':'arrow--down'} onClickHandler={showTaskDetail}/>
                <span className='task-text'>{task.name}</span>
                <input type='checkbox' checked={task.completed} onChange={onCheckTask}></input>
            </div>
            {showDetail && (
                <>
                    steps-list
                    <ul>
                        {task.steps.map((step)=>(
                            <Step key={step.id} step={step} todoData={todoData} setTodoData={setTodoData}/>
                        ))}
                    </ul>                    
                </>
            )}
        </>
    )
}

export default Task;