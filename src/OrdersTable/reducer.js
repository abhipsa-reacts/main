import {
    FETCH_ORDER_DETAILS,
} from './actionType';

const initialState = {
    orderDetails: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDER_DETAILS:
            return {
                ...state,
                orderDetails: action.payload,
            };
        default:
            return state;

    }

};

export default reducer;