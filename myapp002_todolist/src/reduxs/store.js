import { reducer } from './reducer';
import { Legacy_createStore as createStore } from 'redux';

export const store = createStore(reducer);
