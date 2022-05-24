import { combineReducers } from 'redux'
import { characterReducer } from 'modules/character/redux/reducer'

export const rootReducer = combineReducers ({
    characterReducer: characterReducer
})