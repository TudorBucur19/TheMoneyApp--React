const OPERATIONS_LISTS = 'moneyApp/operationS/operations-lists';

const initialState = {
    incomes: [], 
    expenses: []
};

export const operationsListsReducer = (state = initialState, action) => {
    switch(action.type) {
        case OPERATIONS_LISTS: 
            return action.payload;
        default:
            return state;
    }
};

export const setOperationsLists = (data) => {
    return {
        type: OPERATIONS_LISTS,
        payload: data
    }
};
