import {connect} from 'react-redux'

import ShowMessage from '../components/show-message/show-message'
import {DeleteMessageCreator, DoZanCreator} from '../redux/actions'

export default connect(
    data => ({state: data}),
    {DeleteMessageCreator, DoZanCreator}
    )(ShowMessage)