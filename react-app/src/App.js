import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function ComponentName() {
	return <p>This is a text block</p>
}

//function triggered on clicking
function createAlert() {
  alert("It seems like you clicked here!")
}

function App() {
  return (
    <div className="App">
      <Header info="This is an example header"/>
      <Header info="This is another example"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <ComponentName/>
          <Footer note="React is fun!"
            my_alert = {createAlert}/>
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
