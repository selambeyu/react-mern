
import { createStore, applyMiddleware, compose } from 'redux';
// import applyMiddelwar from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const initalState={};

const middelware=[thunk];

const store =createStore(
    rootReducer,
    initalState,
    compose(applyMiddleware(...middelware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
);

export default store;  