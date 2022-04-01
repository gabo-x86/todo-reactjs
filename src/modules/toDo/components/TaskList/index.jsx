import React, { useEffect, useState } from "react";
import Task from "../Task";
import Button from "../../../../components/Button"
import InputText from "../../../../components/InputText";
import { INITIAL_DATA } from "../../../../data";
import './taskList.css';

const TaskList = () =>{
    const [todoData, setTodoData] = useState(INITIAL_DATA);
    const [newTaskName, setNewTaskName] = useState('Nombre de la nueva tarea');

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

    const onInputChange = (event) =>{
        setNewTaskName(event.target.value);
    }

    const onAddTask = () =>{
        const idGen = todoData.length;
        const newTask = {
            id: `t${idGen+1}`,
            name: `${newTaskName}`,
            completed: false,
            description: '',
            steps: []
        }
        setTodoData([...todoData, newTask]);
        console.log(`-->> `, todoData);
    }

    return(
        <>
            {todoData.map((element)=>(
                <Task key={element.id} task={element} onCheckTask={onCheckTask} onCheckStep={onCheckStep} />
            ))}
            <InputText inputValue={newTaskName} onInputChange={onInputChange} />
            <Button textName={'>Add new Step<'} onAddTask={onAddTask} />
        </>
    )

}

export default TaskList;