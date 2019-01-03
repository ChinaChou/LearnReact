import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ComponentAdd extends Component {
    //Here I don't define constructor method. so define state in class 
    state = {
        username: "",
        content: ""
    }

    //check props type, this method is class method, so must use static keyword
    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    //add comment. use arrow function can avoid to bind this
    handleAdd = ()=> {
        let comment = this.state
        this.props.addComment(comment)
        //clear input data
        this.setState({
            username: "",
            content: ""
        })
    }

    //handle username change
    handleUsernameChange = (event) => {
        let username = event.target.value
        this.setState({username})
    }

    //handle content change
    handleContentChange = (event) => {
        let content = event.target.value
        this.setState({content})
    }
    //Use controlled component to update state, it's the recommended way.
    // refs can also be used here.
    render() {
        let {username, content} = this.state
        return (
            <div>
                <p>username:<input type="text" value={username} onChange={this.handleUsernameChange}/></p>
                <p>message：</p>
                <p><input type="textarea" value={content} onChange={this.handleContentChange}/></p>
                <p><button onClick={this.handleAdd}>Submit</button></p>
            </div>
        )
    }
}

export default ComponentAdd