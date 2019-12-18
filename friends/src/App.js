import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends'

function App() {
  return (
  

   
    <div className="App">
      <h1>Friends</h1>
      <Route exact path='/' component={Login} />
        <PrivateRoute path='/friends' component={Friends} />
    </div>
    
  );
}

export default App;
