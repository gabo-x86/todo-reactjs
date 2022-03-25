import React, { useState } from "react";
import './task.css'

const Task = ({task}) =>{
    const [showDetail, setShowDetail] = useState(false);

    const showTaskDetail = () =>{
        setShowDetail(!showDetail)
    }
    const setCheckBoxValue = (id) =>{
        console.log(`Checkbox-value ${id} has changed :)`);
    }
    return(
        <>        
            <div className='task'>
                <span className='task-icon' onClick={showTaskDetail}>v</span>
                <span className='task-text'>{task.title}</span>
                <input type='checkbox' checked={task.completed} onChange={()=>setCheckBoxValue(task.id)}></input>
            </div>
            {showDetail && (
                <>
                    steps-list
                    <ul>
                        {task.steps.map((step,index)=>(
                            <li key={`task${task.id}_step${index}`}>{step}</li>
                        ))}
                    </ul>                    
                </>
            )}
        </>
    )
}

export default Task;