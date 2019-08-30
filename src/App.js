import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Capture from '../src/images/Capture.PNG';
import Login from '../src/components/login/login'
import Register from '../src/components/registration/registration'
import UserHomePage from '../src/components/userHomePage/userHomePage'
import VipHomePage from '../src/components/vipHomePage/vipHomePage'


class App extends Component {


  render() {
    return (
    <HashRouter>
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid nav-header">
            <img className="Capture" src={Capture} alt="Capture" />
            <Link className="navbar-brand" to='/'>ING Parking Slot</Link>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/registration" component={Register} />
          <Route exact path="/userHomePage" component={UserHomePage} />
          <Route exact path="/vipHomePage" component={VipHomePage} />
        </Switch>
      </div>
    </HashRouter>
  );
}
}

export default App;
