import React, {Component} from 'react'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'

import News from './news'
import Messages from './messages'

class Home extends Component {
    render() {
        return (
            <div >
                <h3>Home page detail</h3>
                <nav>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink to="/home/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/messages">Messages</NavLink>
                    </li>
                </ul></nav>
                <div>
                    <Switch>
                        <Route path="/home/news" component={News}/>
                        <Route path="/home/messages" component={Messages}/>
                        <Redirect to="/home/news"/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Home