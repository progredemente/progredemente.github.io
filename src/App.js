import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Welcome from './welcome/Welcome';
import Web from './web/Web';

class App extends Component{

    render() {
        return (
            <Router>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/web" component={Web} />
                    </Switch>
            </Router>
        );
    }
}

export default App;
