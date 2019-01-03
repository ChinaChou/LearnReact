import React from 'react'
import ReactDOM from 'react-dom'

import {DatePicker, message} from 'antd'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: "",
    }
  }

  handleChange = (value) => {
    message.info("你选择的日期是:" + value.toString())
    message.error("你选择的日期是:" + value.toString())
    this.setState({
      date: value,
    })
  }
  render() {
    return (
      <div>
        <DatePicker onChange={value => this.handleChange(value)}/>
        <div style={{margin: 20}}>当前的日期：{this.state.date.toString()}</div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))