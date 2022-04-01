import React, { useState } from "react";
import Task from "../Task";
import Button from "../../../../components/Button"
import { INITIAL_DATA } from "../../../../data";
import './taskList.css';

const TaskList = () =>{
    const [todoData, setTodoData] = useState(INITIAL_DATA);

    const onCheckTask  = (idTask) =>{
        const newTodoData = todoData.map(e => e.id===idTask ? {...e, completed:!e.completed} : e)
        setTodoData(newTodoData);
    }

    const onCheckStep = (idStep) =>{
        const newTodoData = todoData.map(e => {
            const newStep = e.steps.map(s => (
                s.id===idStep ? {...s, completed: !s.completed} : s
            ));
            return {...e, steps: newStep}
        })
        setTodoData(newTodoData);
    }

    return(
        <>
            {todoData.map((element)=>(
                <Task key={element.id} task={element} onCheckTask={onCheckTask} onCheckStep={onCheckStep} />
            ))}
            <Button textName={'>Add new Step<'}/>
        </>
    )

}

export default TaskList;