import {LEAVE_MESSAGE, DELETE_MESSAGE, DO_ZAN} from './action-types'

export const MessageReducer = (state = {messages:[]}, action) => {
    let messages = state.messages
    switch (action.type) {
        case LEAVE_MESSAGE:
            messages.push({username:action.data.username, content:action.data.content, zanCount:0, replyCount:0})
            return {messages}
        case DELETE_MESSAGE:
            messages.splice(action.data, 1)
            return {messages}
        case DO_ZAN:
            messages[action.data].zanCount += 1
            return {messages}
        default:
            return state
    }
}