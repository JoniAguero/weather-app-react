import { createStore } from 'redux';
import { city } from './../reducers/city';

const initialStore = {
    city: undefined
};


export const store = createStore(city, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());