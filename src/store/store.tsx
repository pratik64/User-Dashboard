import { combineReducers, createStore } from 'redux';
import { loginReducer } from '../reducers/login.reducer';

const rootReducer = combineReducers({loginReducer})

export const store = createStore(rootReducer);