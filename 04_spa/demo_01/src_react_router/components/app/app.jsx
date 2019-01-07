import React, {Component} from 'react'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'

import Home from '../views/home'
import Profile from '../views/profile'
import './app.css'

class App extends Component {
    render() {
        return (
        <div className="container-flut">
            <div className="row navTitle">
                <div className="col-lg-12"><h1>React Router Demo</h1></div>
            </div>
            <div className="row">
                <div className="col-lg-2">
                    <ul className="list-group">
                        <NavLink className="list-group-item" to="/home">Home</NavLink>
                        <NavLink className="list-group-item" to="/profile">Profile</NavLink>
                    </ul>
                </div>
                <div className="col-lg-10">
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/profile" component={Profile}/>
                        <Redirect to="/Profile"/>
                    </Switch>
                </div>
            </div>
        </div>
        )
    }
}

export default App