import {connect} from 'react-redux'


import App from '../components/app/app'

export default connect(
   data =>  ({state: data}) //函数需要返回一个对象
)(App)