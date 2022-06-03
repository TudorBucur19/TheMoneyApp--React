import { combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { operationTypeReducer } from './ducks/operationType';
import { operationsListsReducer } from './ducks/operationsList';
import { modalStatusReducer } from './ducks/modalStatus';

const reducer = combineReducers({
    operationType: operationTypeReducer,
    operationsLists: operationsListsReducer,
    modalStatus: modalStatusReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;