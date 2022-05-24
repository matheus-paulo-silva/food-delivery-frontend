import { CLICK_UPDATE_VALUE } from '../actions/action-types'

const initialState = {
    newValue: ""
}

const characterReducer = (state: Object = initialState, action: any ) => {
    switch (action.type) {
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.newValue
            }
        default:
            return state
    }
}


export default characterReducer;