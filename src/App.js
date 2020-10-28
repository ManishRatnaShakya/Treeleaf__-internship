import React from 'react';
import InputForm from './components/InputForm'
import './App.css';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Profiles from './components/Profiles';
import Profile from './components/Profile';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
        <InputForm/>
        </Route>
        <Route  exact path="/profiles" component={Profiles} />
        <Route path="/profiles/:phone" component={Profile}/>
      </Switch>
    </Router>
  );
}

export default App;
