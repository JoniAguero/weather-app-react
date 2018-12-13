import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { city } from './../reducers/city';

const initialStore = {
    city: 'Buenos Aires, ar'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(city, initialStore, composeEnhancers(applyMiddleware(thunk)));