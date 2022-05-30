const OPERATION_TYPE = 'moneyApp/operationType/operation-type';

export const operationTypeReducer = (state = "expense", action) => {
    switch(action.type) {
        case OPERATION_TYPE: 
            return action.payload;
        default:
            return state;
    }
};

export const setOperationType = (data) => {
    return {
        type: OPERATION_TYPE,
        payload: data
    }
}