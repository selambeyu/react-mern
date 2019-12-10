import {createStore,compose} from 'redux';
import applyMiddelwar from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const initalState={};

const middelware=[thunk];

const store =createStore(
    rootReducer,
    initalState,
    compose(applyMiddelwar(...middelware),
        window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
    )
    
);

export default store;