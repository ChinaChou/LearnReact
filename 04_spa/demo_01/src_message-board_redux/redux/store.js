import { MessageReducer } from './reducer'
import { createStore } from 'redux'

const store = createStore(MessageReducer)

export default store