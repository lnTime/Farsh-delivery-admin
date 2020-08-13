import React from 'react';
import './Operator.scss';

export const OperatorUI = ({isActive}) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.286"
        height="17.95"
        viewBox="0 0 16.286 17.95">
        <defs />
        <g
            transform="translate(-91.415 -576.577)">
            <circle
                className="a"
                id={`${isActive ? 'Operator-A_active' : ''}`}
                cx="4.32"
                cy="4.32"
                r="4.32"
                transform="translate(95.333 579.232)" />
            <path
                className="a"
                id={`${isActive ? 'Operator-A_active' : ''}`}
                d="M150.808,659.939a8.426,8.426,0,0,1,7.554,3.811"
                transform="translate(-51.341 -69.903)" />
            <path
                className="a"
                id={`${isActive ? 'Operator-A_active' : ''}`}
                d="M97.79,659.939a8.426,8.426,0,0,0-7.554,3.811"
                transform="translate(1.86 -69.903)" />
            <path
                className="a"
                id={`${isActive ? 'Operator-A_active' : ''}`}
                d="M114.312,585.543v-2.46a6.006,6.006,0,0,1,6.006-6.006h0a6.006,6.006,0,0,1,6.006,6.006v2.46"
                transform="translate(-20.578 0)" />
            <line
                className="b"
                x1="6.006"
                id={`${isActive ? 'Operator-A_active' : ''}`}
                transform="translate(99.74 585.543)" />
            <rect
                className="c"
                width="1.274"
                height="2.46"
                id={`${isActive ? 'Operator-A_active' : ''}`}
                transform="translate(105.746 583.083)" />
            <rect
                className="c"
                width="1.274"
                id={`${isActive ? 'Operator-A_active' : ''}`}
                height="2.46"
                transform="translate(92.46 583.083)" />
        </g>
    </svg>;
}