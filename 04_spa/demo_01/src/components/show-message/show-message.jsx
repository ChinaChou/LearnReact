import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ShowMessage extends Component {
    static propTypes = {
        DeleteMessageCreator: PropTypes.func.isRequired,
        DoZanCreator: PropTypes.func.isRequired
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-lg-1">
                    <div className="well well-sm text-center">{this.props.id + 1}楼</div>
                </div>
                <div className="col-lg-11">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <div className="panel-title">网友 {this.props.message.username}:</div>
                        </div>
                        <div className="panel-body">
                            {this.props.message.content}
                        </div>
                        <div className="panel-footer">
                            <div className="row">
                                <div className="col-sm-2 col-sm-push-10">
                                    <a href="/#" onClick={this.doZan}>点赞({this.props.message.zanCount})</a>&nbsp;
                                    <a href="/#" onClick={this.deleteMessage}>删除</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }

    deleteMessage = () => {
        let {id} = this.props
        if (window.confirm(`确认删除${this.props.message.username}的留言吗？`)) {
            this.props.DeleteMessageCreator(id)
        }

    }
    doZan = () => {
        let {id} = this.props
        this.props.DoZanCreator(id)
    }
}

export default ShowMessage