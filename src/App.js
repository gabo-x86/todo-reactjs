
import './App.css';
import './components/Test';
import TaskList from './modules/toDo/components/TaskList';


function App() {
  
  return (<>
    <div className='main-background'></div>

    <div className='task-list'>
      <TaskList />
    </div>
  </>);
}

export default App;
