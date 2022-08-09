import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMobileScreenButton, faHotel, faHouseChimney, faAt } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { formatTileDate, getAge, formatGender } from '../utils/index';

const Tiles = (props) => {
    const {
        userDetails = {},
        showLoader = false,
    } = props;

    const initialUserDetails = {
        id: '',
        gender: '',
        home_phone: '',
        mobile_phone: '',
        work_phone: '',
        email: '',
        age: '',
    };

    const [userDetailsObj, setUserDetailsObj] = useState(initialUserDetails);
    const [activityObj, setActivityObj] = useState({});
    const [carrierStatus, setCarrierStatus] = useState({});
    const [carrierDate, setCarrierDate] = useState('');

    useEffect(() => {
        if (userDetails && userDetails.id) {
            const {
                id = '',
                gender = '',
                birth_date = '',
                home_phone = '',
                mobile_phone = '',
                work_phone = '',
                email = '',
                activity = {},
                carrier_status = {},
            } = userDetails;
            const age = getAge(birth_date);
            const formattedGender = formatGender(gender)
            setUserDetailsObj({
                id,
                gender: formattedGender,
                home_phone,
                mobile_phone,
                work_phone,
                email,
                age,
            });
            setActivityObj(activity);
            setCarrierStatus(carrier_status);
            const cDt = formatTileDate(carrier_status.since).toString().toUpperCase();
            setCarrierDate(cDt);
        }
    }, [userDetails]);

    return (
        <>
            {!showLoader && <div className="tiles-container">
                <div className='tile tile-user'>
                    <FontAwesomeIcon className="user-icon" icon={faUser} /><br />
                    <p>{`${userDetailsObj.gender} - ${userDetailsObj.age}`}</p>
                </div>
                <div className='tile tile-content'>
                    <p>
                        <FontAwesomeIcon className="icon-content" icon={faUser} />
                        <span>{`#${userDetailsObj.id}`}</span>
                    </p>
                    <p>
                        <FontAwesomeIcon className="icon-content" icon={faMobileScreenButton} />
                        <span>{userDetailsObj.mobile_phone}</span>
                    </p>
                    <p>
                        <FontAwesomeIcon className="icon-content" icon={faHotel} />
                        <span>{userDetailsObj.work_phone}</span>
                    </p>
                    <p>
                        <FontAwesomeIcon className="icon-content" icon={faHouseChimney} />
                        <span>{userDetailsObj.home_phone}</span>
                    </p>
                    <p>
                        <FontAwesomeIcon className="icon-content" icon={faAt} />
                        <span>{userDetailsObj.email}</span>
                    </p>
                </div>
                <div className='tile tile-activity'>
                    <div className='tile-activity-top'>
                        90-DAY COMMUNICATION ACTIVITY
                    </div>
                    <div className='tile-activity-bottom sub-tile-activity'>
                        <div className='sub-tile'>
                            <h1>{activityObj.sms}</h1>
                            <p>SMS</p>
                        </div>
                        <div className='sub-tile'>
                            <h1>{activityObj.email}</h1>
                            <p>EMAIL</p>
                        </div>
                        <div className='sub-tile'>
                            <h1>{activityObj.orders}</h1>
                            <p>ORDERS</p>
                        </div>
                    </div>
                </div>
                <div className='tile tile-status'>
                    <p>SMS CARRIER STATUS</p>
                    <h1>{carrierStatus.status}</h1>
                    <p>{`SINCE ${carrierDate}`}</p>
                </div>
            </div>}
        </>
    );
};

export default Tiles;