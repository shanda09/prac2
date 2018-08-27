import React, { Component } from 'react';
import './App.css';
import {Route,Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Notes from "./components/Notes";
import NewNote from "./components/NewNote";
import SingleNote from "./components/SingleNote";
// import EditNote from "./components/EditNote";


class App extends Component { 
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route exact path="/Notes" component={Notes} />
            <Route path="/Notes/New"  component={NewNote} />
            <Route path= "/Notes/:id" component={SingleNote} />
        </Switch>
       </div>
    );
  }
}

export default App;