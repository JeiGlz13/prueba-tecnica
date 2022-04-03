import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { employeeReducer } from '../reducers/employeeReducer';

const reducers = combineReducers({
    employees: employeeReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));