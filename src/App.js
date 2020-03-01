import React from 'react';
import Home from './containers/Home';
import Projects from './containers/Projects';
import './App.css';
import { navbar } from './shared/navbar';
import { footer } from './shared/footer';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                {navbar()}
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/" component={Home} />
                </Switch>
                {footer()}
            </div>
        </Router>
    );
};

export default App;