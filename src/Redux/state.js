import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { personReduser } from './personReduser.js';
import { ancetsReduser } from './AncetReduser.js';



const rootReducer = combineReducers({
    person:personReduser,
    ancets:ancetsReduser,
})

const store = createStore(rootReducer, composeWithDevTools());

export { store }