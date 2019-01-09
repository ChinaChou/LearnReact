import React from 'react'
import ReactDOM from 'react-dom'


import App from './components/app/app'
import store from './redux/store'

function render() {
    ReactDOM.render(<App store={store}/>, document.getElementById("root"))
}

ReactDOM.render(<App store={store}/>, document.getElementById("root"))

//监听state变化，然后重新渲染UI
store.subscribe(render)