import {
    FETCH_ORDER_DETAILS,
} from './actionType';
import { SHOW_LOADING_INDICATOR } from '../Header/actionType';

export const fetchOrderDetails = () => dispatch => {
    dispatch({ type: SHOW_LOADING_INDICATOR, payload: true });
    fetch('https://evoteam-verasoft.github.io/data/orders.json')
        .then(response => response.json())
        .then(orderDetails => {
            dispatch({ type: SHOW_LOADING_INDICATOR, payload: false });
            dispatch({ type: FETCH_ORDER_DETAILS, payload: orderDetails });
        }).catch(error => {
            dispatch({ type: SHOW_LOADING_INDICATOR, payload: false });
            console.log(error);
        });
};