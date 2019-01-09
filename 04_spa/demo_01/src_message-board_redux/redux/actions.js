import {LEAVE_MESSAGE, DELETE_MESSAGE, DO_ZAN} from './action-types'

function LeaveMessageCreator(data) {
    return {
        type: LEAVE_MESSAGE,
        data: data
    }
}

function DeleteMessageCreator(id) {
    return {
        type: DELETE_MESSAGE,
        data: id
    }
}

function DoZanCreator(id) {
    return {
        type: DO_ZAN,
        data: id
    }
}

export {LeaveMessageCreator, DeleteMessageCreator, DoZanCreator}
