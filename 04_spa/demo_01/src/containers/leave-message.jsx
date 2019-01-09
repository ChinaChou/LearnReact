import {connect} from 'react-redux'

import LeaveMessage from '../components/leave-message/leave-message'
import {LeaveMessageCreator} from '../redux/actions'

//此处由于需要的是第二个参数，所以第一个也需要占位。其实在组件中没用到。
export default connect(
    data => ({state: data}),
    {LeaveMessageCreator}
    )(LeaveMessage)

