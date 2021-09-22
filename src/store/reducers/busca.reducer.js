import { actionTypes } from '../actions/busca.action'
import initialState from './initialState';

export default (state = initialState.register, { type, payload }) => {
    switch (type) {

    case actionTypes.CHANGE:
        return { ...state, ...payload }
    case actionTypes.SUCCESS:
        return { ...state, ...payload }
    case actionTypes.ERROR:
        return { ...state, ...payload }
        
    default:
        return state
    }
}