import React, { Component } from 'react';
import './App.css';
import {
    HashRouter as Router
} from "react-router-dom";
import {createBrowserHistory} from 'history';
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
                <Web />
            </Router>
        );
    }
}

export default App;
