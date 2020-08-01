import React from 'react';
import './App.css';
import logo from './img/logo.png'
import list from './list.json';
import Post from './Post';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <Link to="/">
                        <img src={logo} id="logo" alt="Logo"/>
                    </Link>
                </header>
                <section>
                    <Switch>
                        <Route exact path="/" render={
                            () => {
                                return (
                                    <Redirect to={`/post/${Object.keys(list)[Object.keys(list).length - 1]}`}/>
                                )
                            }
                        }/>
                        <Route path="/post/:id" component={Post}/>
                    </Switch>
                </section>
            </Router>
        </div>
    );
}

export default App;
