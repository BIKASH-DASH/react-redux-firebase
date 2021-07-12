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
import ProjectDetails from './components/Project/ProjectDetails'
import SignIn from './components/auth/SignIn'
function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/signin" component={SignIn} >SignIn</Route>
        <Route path="/projectdetails/:id" component={ProjectDetails}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/" component={Dashboard}></Route>
        
      </Switch>
    </Router>
  );
}

export default App;
