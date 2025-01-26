
import { combineReducers } from 'redux';
import pesquisaReducer from './pesquisaReducer';

const rootReducer = combineReducers({
  pesquisa: pesquisaReducer,
});

export default rootReducer;