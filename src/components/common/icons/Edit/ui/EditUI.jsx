import React from 'react';
import './Edit.scss';

export const EditUI = ({isEdit}) => {
    return (
        <>
        {
            isEdit ? (<a className = "closeIcon"/>) : (<svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.377"
                height="17.183"
                viewBox="0 0 14.377 17.183">
                <defs />
                <g
                    transform="translate(-278.5 -27.458)">
                    <g
                        transform="translate(279 27.958)">
                        <path
                            className="Edit-A"
                            d="M257.767,287.028l-2.938.536.536-2.938,9.977-9.977,2.4,2.4Z"
                            transform="translate(-254.828 -274.648)" />
                        <line className="Edit-A" x2="12.916" transform="translate(0.461 16.183)" />
                    </g>
                </g>
            </svg>)
        }
        </>
);
}