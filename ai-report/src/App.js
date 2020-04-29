import React from 'react';
import Navbar from './components/Navbar';
// import Intro from './components/Intro';
// import Ethics from './components/Ethics';
// import Governing from './components/Governing';

function App() {
  return (

    <div>
      <Navbar />
      <h1>main component</h1>
    </div>
    

    // <Router>
    //   <Navbar />
    //   <Route exact path ="/" component= {Intro} />
    //   <Route exact path ="/ai-ethics" component= {Ethics} />
    //   <Route exact path ="/ai-governing" component= {Governing} />
    // </Router>
  );
}

export default App;
