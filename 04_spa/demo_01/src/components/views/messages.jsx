import React, {Component} from 'react'
import {Route, NavLink} from 'react-router-dom'

import MessageDetail from './message-details'

class Message extends Component {
    state = {
        messages:[]
    }

    //模拟请求数据
    componentDidMount() {
        const messages = [
            "message-01",
            "message-01",
            "message-03"
        ]
        setTimeout(()=> this.setState({messages}),1000)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map(
                            (m,idx) =>(
                                <li key={idx}>
                                <NavLink to={`/home/messages/message-detail/${idx}`}>{m}</NavLink>
                                </li>
                            )
                        )
                    }
                </ul>
                <Route path="/home/messages/message-detail/:id" component={MessageDetail}/>
            </div>

        )
    }
}

export default Message