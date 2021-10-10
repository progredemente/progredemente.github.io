import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import {createBrowserHistory} from 'history';
import Welcome from './welcome/Welcome';
import Web from './web/Web';

const history = createBrowserHistory();

history.listen((location) => {
    window.gtag('event', 'page_view', {
        page_title: location.hash.replace(/^#\//, "").replace(/\/.*/,"")
    });
})

class App extends Component{

    render() {
        return (
            <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/web" component={Web} />
                    </Switch>
            </Router>
        );
    }
}

export default App;
