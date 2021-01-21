// Redux API
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// Redux Thunk (Middleware)
import thunk from 'redux-thunk';
// import Reducers
import { productsReducer } from './reducers/productsReducer';

// initial State
const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Store & pass the combined Reducers as Argument
export const store = createStore(
    // Combined Reducers
   combineReducers({
        products: productsReducer,
    }),
    // Initial State
    initialState,
    // Enhancer With Middleware as argument
    composeEnhancer(applyMiddleware(thunk))
);
