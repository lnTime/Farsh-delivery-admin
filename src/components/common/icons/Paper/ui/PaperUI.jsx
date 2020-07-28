import React from 'react';
import './Paper.scss';

export const PaperUI = ({isActive}) => {
    return <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16.846" 
        height="15.656" 
        viewBox="0 0 16.846 15.656">
            <defs />
            <g 
                transform="translate(-131.958 -767.157)">
            <g 
                transform="translate(132.458 767.657)">
                <path 
                    className={isActive ? "a Icon_active" : "a"} 
                    d="M1921.805,1966.271l-.067,0h-12.269a1.789,1.789,0,0,1-1.788-1.789v-1.875h12.4v1.875A1.788,1.788,0,0,0,1921.805,1966.271Z" 
                    transform="translate(-1907.68 -1951.618)"/>
                <path 
                    className={isActive ? "a Icon_active" : "a"} 
                    d="M1934.464,1870.52v12.868a1.722,1.722,0,1,1-3.442,0v-1.875H1920.5V1870.52Z" 
                    transform="translate(-1918.618 -1870.52)"/>
                    <line 
                        class="b" 
                        x2="6.806" 
                        transform="translate(5.325 3.662)"/>
                    <line 
                        class="b" 
                        x2="3.781" 
                        transform="translate(5.325 6.686)"/>
            </g>
            </g>
        </svg>;
};
