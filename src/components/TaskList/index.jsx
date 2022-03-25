import React from "react";
import Task from "../Task";
import './taskList.css';

const TaskList = ({tasks}) =>{
    return(
        <>
            {tasks.map((element)=>(
                <Task key={element.id} task={element} />
            ))}
        </>
    )

}

export default TaskList;