import logo from './logo.svg';
import './App.css';
import {Greet} from './Greet'

function App() {
  const names = ["Phillip", "Julia", "Thomas"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Greet names={names}></Greet>
      </header>
    </div>
  );
}

export default App;
