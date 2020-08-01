import React from 'react';
import './App.css';
import logo from './img/logo.png'
import list from './list.json';
import Post from './Post';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <header className="main-header">
                    <Link to="/">
                        <img src={logo} id="logo" alt="Logo"/>
                    </Link>
                    <div id="title">
                        <h1>progredemente</h1>
                    </div>
                </header>
                <section>
                    <Switch>
                        <Route exact path="/">
                            <Post id={Object.keys(list)[Object.keys(list).length - 1]}/>
                        </Route>
                        <Route exact path="/post/:id" component={Post}/>
                    </Switch>
                </section>
                <footer>© 2020 progredemente</footer>
            </Router>
        </div>
    );
}

export default App;
