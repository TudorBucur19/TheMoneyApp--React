const OPERATION_CATEGORY = 'moneyApp/operationCategry/operation-category';

export const operationCategoryReducer = (state = "", action) => {
    switch(action.type) {
        case OPERATION_CATEGORY: 
            return action.payload;
        default:
            return state;
    }
};

export const setOperationCategory = (data) => {
    return {
        type: OPERATION_CATEGORY,
        payload: data
    }
};

