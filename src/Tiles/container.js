import {
    connect,
} from "react-redux";
import Tiles from './index';

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

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Tiles);