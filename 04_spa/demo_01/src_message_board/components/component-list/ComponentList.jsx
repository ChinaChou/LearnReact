import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ComponentList extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        deleteComment: PropTypes.func.isRequired
    }

    //handle delete
    handleDelete = () => {
        let {comment, index, deleteComment} = this.props
        if (window.confirm(`Delete ${comment.username}'s comment?`)) {
            deleteComment(index)
        }
    }
    render() {
        let {comment} = this.props
        return (
            <div>
                <p>{comment.username}</p>
                <p>{comment.content}</p>
                <p><button onClick={this.handleDelete}>Delete</button></p>
            </div>
        )
    }
}

export default ComponentList