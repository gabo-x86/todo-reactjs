import logo from './logo.svg';
import './App.css';
import './components/Test';
import TestComponent from './components/Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
