import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import DependentCounters from './DependentCounters';

/**
 * The main application component.
 * 
 * This component renders the main structure of the application, including the header and main content areas.
 * The header contains the application logo, a brief instruction, and a link to the React documentation.
 * The main content area includes a Counter component.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <main className="App-main">
        <Counter />
      </main>
    </div>
  );
}

export default App;
