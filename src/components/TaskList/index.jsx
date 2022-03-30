import React, { useState } from "react";
import Task from "../Task";
import Button from "../Button"
import { INITIAL_DATA } from "../../data";
import './taskList.css';

const TaskList = () =>{
    const [todoData, setTodoData] = useState(INITIAL_DATA);

    return(
        <>
            {todoData.map((element)=>(
                <Task key={element.id} task={element} setTodoData={setTodoData} todoData={todoData}/>
            ))}
            <Button textName={'>Add new Step<'}/>
        </>
    )

}

export default TaskList;