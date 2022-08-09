import React from 'react';
import './index.scss';

const DotLoadingIndicator = () => {
    return (
        <div className="dot-loader-container">
            <div className="dot-loader">
                <div id="first-dot" className="dot"></div>
                <div id="second-dot" className="dot"></div>
                <div id="third-dot" className="dot"></div>
            </div>
        </div>
    );
};

export default DotLoadingIndicator;
