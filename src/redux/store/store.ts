import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    // reducers
});

export const store = createStore(reducers, applyMiddleware(thunk));