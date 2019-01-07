import React, {Component} from 'react'

import './app.css'
import LeaveMessage from '../leave-message/leave-message'
import ShowMessage from '../show-message/show-message'

class App extends Component {
    render() {
        let show = this.props.store.getState().messages.length === 0?"block":"none"
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
                        {this.props.store.getState().messages.map((v,i)=><ShowMessage key={i} id={i} message={v}/>)}
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