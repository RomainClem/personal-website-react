import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import './App.css';

import Home from './Components/Home';
import Header from "./Containers/Header";
import Footer from './Containers/Footer';
import Wip from "./Components/Wip";
import Projects from "./Components/Projects";

/*
TODO:
      - depcheck client + server to remove unused package
 */

class App extends Component {
  render() {
    return (
        <Router>
            <div className="container-fluid p-0">
                <Header/>
                <main className="flex-shrink-0">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Projects" component={Wip} />
                        <Route path="/About" component={Wip} />
                        <Route component={Wip} />
                    </Switch>
                </main>
                <Footer/>
            </div>
        </Router>
    )
  }
}

export default App;
