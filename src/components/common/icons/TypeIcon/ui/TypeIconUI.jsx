import React from 'react';
import styles from './TypeIcon.module.scss';

export const TypeIconUI = ({type, className}) => {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="25.525"
        height="33"
        viewBox="0 0 25.525 33"
        className={className}>
        <defs />
        <g
            transform="translate(-82.682 -586.78)">
            <g
                transform="translate(82.682 586.78)">
                <path
                    className={styles.A}
                    d="M100.806,586.78H84.9A2.218,2.218,0,0,0,82.682,589v28.564A2.218,2.218,0,0,0,84.9,619.78h21.089a2.218,2.218,0,0,0,2.218-2.218V592.2Z"
                    transform="translate(-82.682 -586.78)" />
                <path
                    className={styles.B}
                    d="M112.9,592.2h-7.4V586.78Z"
                    transform="translate(-87.371 -586.78)" />
            </g>
            <text
                className={styles.C}
                transform="translate(94.901 605.286)">
                <tspan
                    x="-8.491"
                    y="0">
                    {type}
            </tspan>
            </text>
        </g>
    </svg>
    );
}