import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Auth/login/Login';

function App() {
    return (
      <div className='App'>
      <Route path='/' component={Login} />
      <div>Hello</div>
    </div>
  );
}

export default App;
