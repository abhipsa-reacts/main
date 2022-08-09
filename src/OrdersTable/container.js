import {
    connect,
} from "react-redux";
import {
    fetchOrderDetails,
} from "./actions";
import OrdersTable from './index';

const mapStateToProps = state => {
    const {
        Header: {
            showLoader = false,
        } = {},
        Order: {
            orderDetails = {},
        } = {},
    } = state;
    return {
        orderDetails,
        showLoader,
    }
};

const mapDispatchToProps = {
    fetchOrderDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersTable);