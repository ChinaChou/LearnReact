import React, {Component} from 'react'
import PropTypes from 'prop-types'

class LeaveMessage extends Component {
    static propTypes = {
        LeaveMessageCreator: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        我要留言
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="姓名" required ref={input=> this.usernameInput = input}/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="7" placeholder="输入留言内容" required ref={input => this.messageInput = input}></textarea>
                        </div>
                        <div className="row">
                        <div className="col-sm-2"><button className="btn btn-primary" onClick={this.addMessage}>提交</button></div>
                        <div className="col-sm-2 col-sm-push-6"><button className="btn btn-danger" onClick={this.resetMsg}>重写</button></div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    addMessage = ()=> {
        const username = this.usernameInput.value.trim()
        const content = this.messageInput.value.trim()
        if (username === "" || content === "") {
            return
        }
        this.props.LeaveMessageCreator({username, content})
        this.usernameInput.value = ""
        this.messageInput.value = ""
    }

    resetMsg = () => {
        this.usernameInput.value = ""
        this.messageInput.value = ""
    }
}

export default LeaveMessage