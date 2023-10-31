// import logo from './logo.svg';
import './App.css';
import './Compo/Style.css';
import Main from './Compo/Main';
import NavBar from './DataStore/NavBar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <NavBar>
        <Main />
      </NavBar>

    </div>
  );
}

export default App;
