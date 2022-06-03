const MODAL_TOGGLE = 'moneyApp/modalStatus/modal-toggle';

export const modalStatusReducer = (state = false, action) => {
    switch(action.type) {
        case MODAL_TOGGLE: 
            return !state;
        default:
            return state;
    }
};

export const toggleModal = () => {
    return {
        type: MODAL_TOGGLE,
    }
};