import { combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';

import { operationsListsReducer } from './ducks/operationsList';
import { modalStatusReducer } from './ducks/modalStatus';
import { clickedDayReducer } from './ducks/clickedDay';
import { operationCategoryReducer } from './ducks/operationCategory';

const reducer = combineReducers({
    operationsLists: operationsListsReducer,
    modalStatus: modalStatusReducer,
    clickedDay: clickedDayReducer,
    operationCategory: operationCategoryReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;