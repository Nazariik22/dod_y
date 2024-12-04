import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReduser } from './userReduser.js';
import { personReduser } from './personReduser.js';
import { ancetsReduser } from './AncetReduser.js';



const rootReducer = combineReducers({
    users: userReduser,
    person:personReduser,
    ancets:ancetsReduser,
})

const store = createStore(rootReducer, composeWithDevTools());

export { store }