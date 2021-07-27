import {createStore, combineReducers, applyMiddleware} from 'redux';
import dataReducer from '../reducers/dataReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers(
    { dataReducer,  }
);

export const store = createStore(rootReducer, applyMiddleware(thunk));