import { combineReducers } from 'redux';
import cadastroReducer from './cadastro.reducer';
import homeReducer from './home.reducer';
import buscaReducer from './busca.reducer';

const rootReducer = combineReducers({
    cadastroReducer, 
    homeReducer,
    buscaReducer
})

export default rootReducer;