import React, { useState, useEffect} from 'react';
import './App.css';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
import Navbar from './components/layout/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard'
function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={Dashboard}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </Router>
  );
}

export default App;
