
import './App.css';
import './components/Test';
import TaskList from './components/TaskList';


function App() {
  const TODO = [
    {id: '1', title: 'Title 1', completed: false, description: 'description', steps: ['step1','step2','step3']},
    {id: '2', title: 'Title 2', completed: false, description: 'description 2', steps: ['step1','step2','step3','step4']},
    {id: '3', title: 'Title 3', completed: false, description: 'description 3', steps: ['step1','step2']}
  ]
  
  return (
    <>
      <TaskList tasks={TODO}/>
    </>
  );
}

export default App;
