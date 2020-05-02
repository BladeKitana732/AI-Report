import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Ethics from './components/Ethics';
import Governing from './components/Governing';
import { BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (

    <Router>
      <Navbar />
      <Route exact path ="/" component= {Intro} />
      <Route exact path ="/ai-ethics" component= {Ethics} />
      <Route exact path ="/ai-governing" component= {Governing} />
    </Router>
  );
}

export default App;
