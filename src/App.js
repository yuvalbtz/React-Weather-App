import React from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar'

import { Route, Switch ,BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div >
    
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
     </Switch>
    </Router>
    
    
    

    </div>
  );
}

export default App;
