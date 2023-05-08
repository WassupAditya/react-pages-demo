import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>React CI/CD pipeline using github actions </h3>
        <h4>For free deployment we used Github pages.</h4>
        <h5>Aditya Patil (331046)</h5>
        <h5>Mithilesh Lathkar (331034)</h5>
        <h5>Ranjitsingh Jadhav (331026)</h5>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
