import { actionTypes } from '../actions/cadastro.action'
import initialState from './initialState';

const cadastroReducer =  (state = initialState.register, action) => {
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

export default cadastroReducer;