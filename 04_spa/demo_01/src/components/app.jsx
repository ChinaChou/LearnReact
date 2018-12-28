import React, {Component} from 'react'

import ComponentList from './component-list/ComponentList'
import ComponentAdd from './component-add/ComponentAdd'

class App extends Component {
    // init data
    state = {
        comments: [
            {username: "Rose", content: "I want to jump!"},
            {username: "Jack", content: "You jump, I jump!"}
        ]
    }

    addComment = (comment)=> {
        let {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }

    deleteComment = (index) => {
        let {comments} = this.state
        comments.splice(index, 1)
        this.setState({comments})
    }
    render() {
        let {comments} = this.state
        let show = comments.length ===0?"block":"none"
        return (
            <div>
                <h2>Message Board Demo</h2>
                <h4 style={{display:show}}>No message for the moment, click the bottom submit button to leave a message.</h4>
                <ul>
                    {comments.map((v,k) => <ComponentList key={k} comment={v} index={k} deleteComment={this.deleteComment}/>)}
                </ul>
                <ComponentAdd addComment={this.addComment}/>
            </div>
        )
    }
}

export default App