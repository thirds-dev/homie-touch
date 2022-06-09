import logo from './logo.svg';
import './App.css';

function App() {
  const tellAJoke = async (e) => {
    await fetch('http://api.homie/joke/random');
  };
  const startTheParty = async (e) => {
    await fetch('http://api.homie/party/start');
  };
  const stopTheParty = async (e) => {
    await fetch('http://api.homie/party/stop');
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
          <button onClick={startTheParty}>Start the Party</button>
          <button onClick={stopTheParty}>Stop the Party</button>
        </p>
      </header>
    </div>
  );
}

export default App;
