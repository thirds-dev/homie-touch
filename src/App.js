import logo from './logo.svg';
import './App.css';

function App() {
  const tellAJoke = async (e) => {
    await fetch('http://api.homie/joke/random');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Homie Touch
        </p>
        <p>
          <button onClick={tellAJoke}>Tell a Joke</button>
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
