import React, { useState } from "react";
import Task from "../Task";
import Button from "../../../../components/Button"
import InputText from "../../../../components/InputText";
import Modal from "../../../../components/Modal"
import AddTask from "../AddTask";
import { INITIAL_DATA } from "../../../../data";
import './taskList.css';

const TaskList = () =>{
    const [todoData, setTodoData] = useState(INITIAL_DATA);
    const [isModalAddTaskOpen, setIsModalAddTaskOpen] = useState(false);

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

    const onAddTask = (newTask) =>{
        setTodoData([...todoData, newTask]);
        console.log(todoData)
    }

    const onVisibleModal = () =>{
        setIsModalAddTaskOpen(!isModalAddTaskOpen);
    }

    return(
        <>
            {todoData.map((element)=>(
                <Task key={element.id} task={element} onCheckTask={onCheckTask} onCheckStep={onCheckStep} />
            ))}
            <button onClick={onVisibleModal}>OPEN MODAL</button>
            <Modal isVisible={isModalAddTaskOpen} onVisibleModal={onVisibleModal}>
                <AddTask 
                    taskLength={todoData.length} 
                    onAddTask={onAddTask} 
                    onVisibleModal={onVisibleModal}
                />
            </Modal>
        </>
    )

}

export default TaskList;