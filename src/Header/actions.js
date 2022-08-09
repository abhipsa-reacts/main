import {
    FETCH_USER_DETAILS,
    SHOW_LOADING_INDICATOR
} from './actionType';

export const fetchUserDetails = () => dispatch => {
    dispatch({ type: SHOW_LOADING_INDICATOR, payload: true });
    fetch('https://evoteam-verasoft.github.io/data/summary.json')
        .then(response => response.json())
        .then(userDetails => {
            dispatch({ type: SHOW_LOADING_INDICATOR, payload: false });
            dispatch({ type: FETCH_USER_DETAILS, payload: userDetails });
        }).catch(error => {
            dispatch({ type: SHOW_LOADING_INDICATOR, payload: false });
            console.log(error);
        });
};