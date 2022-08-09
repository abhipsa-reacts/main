import {
    connect,
} from "react-redux";
import {
    fetchUserDetails,
} from "./actions";
import Header from './index';

const mapStateToProps = state => {
    const {
        Header: {
            userDetails = {},
            showLoader = false,
        } = {},
    } = state;
    return {
        userDetails,
        showLoader,
    }
}

const mapDispatchToProps = {
    fetchUserDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);