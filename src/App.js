import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Info from "./components/Info";
import Navigation from "./components/Navigation";

class App extends Component {

  render() {
    return (
      <div>
        <Navigation/>
        <Switch>
          <Route path='/info' component={Info} exact/>
          <Route path='/:id' component={Home} exact/>
          <Route path='/' component={Home} exact/>
        </Switch>
      </div>
    )
  }
}

export default App;
