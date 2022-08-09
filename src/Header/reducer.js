import {
    FETCH_USER_DETAILS,
    SHOW_LOADING_INDICATOR,
} from './actionType';

const initialState = {
    userDetails: {},
    showLoader: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload,
            };
        case SHOW_LOADING_INDICATOR:
            return {
                ...state,
                showLoader: action.payload
            }
        default:
            return state;

    }

};

export default reducer;