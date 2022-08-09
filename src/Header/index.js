import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import './index.scss';
import CircleLoadingIndicator from '../utils/circleLoadingIndicator/index';

const PageHeader = (props) => {
    const {
        userDetails = {},
        showLoader = false,
        fetchUserDetails,
    } = props;
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        if (!userDetails.id && !showLoader) {
            fetchUserDetails();
        }
    }, []);

    useEffect(() => {
        if (userDetails.id) {
            const {
                first_name = '',
                last_name = '',
            } = userDetails;
            setFullName(`${first_name} ${last_name}`);
        }
    }, [userDetails]);

    return (
        <>
            {showLoader && <CircleLoadingIndicator />}
            {!showLoader && <div className="page-header-container">
                <div className='header-left'>
                    <FontAwesomeIcon className="star-icon" icon={faStar} />
                    <h2>{fullName}</h2>
                </div>
                <div className='header-right'>
                    <button>New Order</button>
                </div>
            </div>}
        </>
    );
};

export default PageHeader;