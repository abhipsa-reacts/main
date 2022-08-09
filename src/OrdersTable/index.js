import React, { useEffect, useState } from 'react';
import './index.scss';
import DotLoadingIndicator from '../utils/dotLoadingIndicator/index';
import CircleLoadingIndicator from '../utils/circleLoadingIndicator/index';
import TableComponent from './table';

const OrdersTable = (props) => {
    const {
        orderDetails = '',
        showLoader = '',
        fetchOrderDetails,
    } = props;

    const [showOrdersTable, setShowOrdersTable] = useState(false);
    const [showErrorContent, setShowErrorContent] = useState(false);
    const [showDotLoader, setShowDotLoader] = useState(false);
    const [isBtnActive, setIsBtnActive] = useState('');

    const handleClick = (e) => {
        setIsBtnActive(e.target.name);
        if (e.target.name === 'sentBtn') {
            setShowOrdersTable(true);
            setShowDotLoader(false);
            fetchOrderDetails();
        } else {
            setShowDotLoader(true);
            setShowOrdersTable(false);
        }
    };

    useEffect(() => {
        if (showDotLoader) {
            setTimeout(() => {
                setShowDotLoader(false);
                setShowErrorContent(true);
            }, 2000);
        }
    }, [showDotLoader]);

    return (
        <>
            {showLoader && <CircleLoadingIndicator />}
            {!showLoader &&
                <div>
                    <div className='table-header'>
                        <div className='table-header-left'>
                            <button
                                id="sentBtn"
                                name="sentBtn"
                                className={isBtnActive === 'sentBtn' ? "active" : ""}
                                onClick={(e) => handleClick(e, 'sentBtn')}
                            >
                                SENT
                            </button>
                            <button
                                id="errorsBtn"
                                name="errorsBtn"
                                className={isBtnActive === 'errorsBtn' ? "active" : ""}
                                onClick={(e) => handleClick(e, 'errorsBtn')}
                            >
                                ERRORS
                            </button>
                        </div>
                        <div className='table-header-mid'>
                            <p>RECENT ORDERS</p>
                        </div>
                        <div></div>
                    </div>
                    {showOrdersTable && !showLoader && Object.keys(orderDetails).length &&
                        <TableComponent orderDetails={orderDetails} />
                    }
                    {showDotLoader && !showErrorContent &&
                        <DotLoadingIndicator />
                    }
                    {!showDotLoader && showErrorContent && !showOrdersTable &&
                        < div className='error-content'>
                            No content
                        </div>
                    }
                </div>}
        </>
    );
};

export default OrdersTable;