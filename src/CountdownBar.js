import React from 'react';


const CountdownBar = ({duration, isLost, currentTheme}) => {
    const animationDuration = !isLost ? `${duration * 1000}ms` : "0ms";
    return (
        <div className={`countdown-bar-container countdown-bar-container-${currentTheme}`}> 
            <div className={`countdown-bar countdown-bar-${currentTheme}`} style={{animationDuration}}></div>
        </div>
    );
};

export default CountdownBar;
