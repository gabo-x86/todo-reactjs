import React, { useState } from "react";
import Arrow from "../../../../components/Arrow";
import Step from '../Step'
import './task.css'

const Task = ({task, onCheckTask, onCheckStep}) =>{
    const [showDetail, setShowDetail] = useState(false);

    const showTaskDetail = () =>{
        setShowDetail(!showDetail);
    }
    
    return(
        <>        
            <div className='task'>
                <Arrow direction={showDetail?'arrow--up':'arrow--down'} onClickHandler={showTaskDetail}/>
                <span className='task-text'>{task.name}</span>
                <input type='checkbox' checked={task.completed} onChange={()=>onCheckTask(task.id)}></input>
            </div>
            {showDetail && (
                <>
                    steps-list
                    <ul>
                        {task.steps.map((step, index)=>(
                            <Step key={step.id} step={step} onCheckStep={onCheckStep} />
                        ))}
                    </ul>                    
                </>
            )}
        </>
    )
}

export default Task;