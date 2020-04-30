import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Ethics from './components/Ethics';
import Governing from './components/Governing';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
<<<<<<< HEAD
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
          //testing
        >
          Learn React
        </a>
      </header>
    </div>
=======

    <Router>
      <Navbar />
      <Route exact path ="/" component= {Intro} />
      <Route exact path ="/ai-ethics" component= {Ethics} />
      <Route exact path ="/ai-governing" component= {Governing} />
    </Router>
>>>>>>> 2b2c1655b8ff4146605ea50c84ed3cb6443cc8b9
  );
}

export default App;
