import {
    combineReducers
} from 'redux';
import headerReducer from '../Header/reducer';
import ordersReducer from '../OrdersTable/reducer';

const rootReducer = combineReducers({
    Header: headerReducer,
    Order: ordersReducer,
});

export default rootReducer;