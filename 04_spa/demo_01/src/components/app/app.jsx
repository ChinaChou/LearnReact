import React, {Component} from 'react'
import PropTypes from 'prop-types'

import LeaveMessage from '../../containers/leave-message'
import ShowMessage from '../../containers/show-message'
import './app.css'

class App extends Component {
    static propTypes = {
        state: PropTypes.object.isRequired
    }
    
    render() {
        let show = this.props.state.messages.length === 0?"block":"none"
        return (
            <div className="container">
                <div className="row messageHead">
                    <div className="col-lg-12">
                        <div className="well well-lg"><h1>留言板</h1></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <h3 style={{display:show}}>暂无留言，请在右边添加!</h3>
                        {this.props.state.messages.map((v,i)=><ShowMessage key={i} id={i} message={v}/>)}
                    </div>
                    <div className="col-lg-3">
                        <LeaveMessage/>
                    </div>
                </div>
        </div>
        )
    }
}

export default App