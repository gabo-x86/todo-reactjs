import React, {useState} from "react";
import InputText from "../../../../components/InputText";
import Button from "../../../../components/Button";
import Text from "../../../../components/Text";
import './addTask.css';

const AddTask = ({taskLength, onAddTask, onVisibleModal}) =>{

    const [newTaskData, setNewTaskData] = useState({name:'', description:''});

    const onNameChange = (event) =>{
        setNewTaskData({...newTaskData, name: event.target.value});
    }    
    const onDescriptionChange = (event) =>{
        setNewTaskData({...newTaskData, description: event.target.value});
    }

    const addTask = () =>{
        const idGen = taskLength;
        const newTask = {
            id: `t${idGen+1}`,
            name: `${newTaskData.name}`,
            completed: false,
            description: `${newTaskData.description}`,
            steps: []
        }
        onAddTask(newTask);
        //Por qué cuando hago console.log no devuelve todos los datos de todoData??? 
    }

    return(<>
        <div className="addTask-container">
            <div className="addTask-container__title">
                <Text textType={'title'}>Agregar Tarea</Text>
            </div>

            <div className="addTask-container__task-input">
                <InputText 
                    inputType={'text'}
                    fieldName={'Nueva Tarea'}
                    inputValue={newTaskData.name} 
                    onInputChange={onNameChange} 
                />
            </div>

            <div className="addTask-container__description-input">
                <InputText 
                    inputType={'paragraph'}
                    fieldName={'Descripción de la Tarea'} 
                    inputValue={newTaskData.description} 
                    onInputChange={onDescriptionChange} 
                />
            </div>

            <div className="addTask-container__buttons">
                <Button textName={'Añadir Tarea'} onClickHandler={addTask} />
                <Button textName={'Cancelar'} onClickHandler={onVisibleModal} />
            </div>
            
            
            
        </div>
    </>)
}

export default AddTask;