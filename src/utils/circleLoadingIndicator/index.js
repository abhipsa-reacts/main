import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const CircleLoadingIndicator = () => {
    return (
        <div className='loader-overlay'>
            <FontAwesomeIcon className='spinner' icon={faCircleNotch} spin={true} size="3x" inverse />
        </div>
    );
};

export default CircleLoadingIndicator;
