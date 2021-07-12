import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/Project/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/Project/CreateProject'
function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/signin" component={SignIn} ></Route>
        <Route exact path="/createproject" component={CreateProject} ></Route>
        <Route exact path="/signup" component={SignUp} ></Route>
        <Route path="/projectdetails/:id" component={ProjectDetails}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/" component={Dashboard}></Route>        
      </Switch>
    </Router>
  );
}

export default App;
