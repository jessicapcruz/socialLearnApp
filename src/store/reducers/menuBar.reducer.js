import { actionTypes } from '../actions/menuBar.action'
import initialState from './initialState';

const menuBarReducer =  (state = initialState.search, action) => {
    console.log('menuBarReducer');
    switch (action.type) {

        case actionTypes.CHANGE:
            return { 
                ...state, 
                register: {
                    ...state.register,
                    ...action.payload

                } 
            }
        case actionTypes.SUCESS:
            return { ...state, ...action.payload }
        case actionTypes.ERROR:
            return { ...state, ...action.payload }
            
        default:
            return state
    }
}

export default menuBarReducer;