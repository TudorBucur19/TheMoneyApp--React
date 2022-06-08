const CLICKED_DAY = 'moneyApp/clickedDay/set-day';

export const clickedDayReducer = (state = "", action) => {
    switch(action.type) {
        case CLICKED_DAY: 
            return action.payload;
        default:
            return state;
    }
};

export const setDay = (data) => {
    return {
        type: CLICKED_DAY,
        payload: data
    }
};