import React, {Component} from 'react'


export default class MessageDetails extends Component {
    allMessages = [
        {id:0, title:"message-01", content: "message 01 content"},
        {id:1, title:"message-02", content: "message 02 content"},
        {id:2, title:"message-03", content: "message 03 content"},
    ]
    render() {
        const {id} = this.props.match.params
        const m = this.allMessages.find(v => v.id === id*1)
        return (
            <ul>
                <li>{m.id}</li>
                <li>{m.title}</li>
                <li>{m.content}</li>
            </ul>
        )
    }
}