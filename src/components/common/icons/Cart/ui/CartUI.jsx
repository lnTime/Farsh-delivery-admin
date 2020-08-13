import React from 'react';
import './Cart.scss';

export const CartUI = ({isActive}) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22.61"
        height="17.478"
        viewBox="0 0 22.61 17.478">
        <defs />
        <g
            transform="translate(-150.308 -690.996)">
            <circle
                className="a"
                id={`${isActive ? 'Cart-A_active' : ''}`}
                cx="1.518" cy="1.518"
                r="1.518"
                transform="translate(166.677 704.938)" />
            <circle
                className="a"
                id={`${isActive ? 'Cart-A_active' : ''}`}
                cx="1.518"
                cy="1.518"
                r="1.518"
                transform="translate(161.163 704.938)" />
            <path
                className="a"
                id={`${isActive ? 'Cart-A_active' : ''}`}
                d="M150.808,691.5h3.864l4.121,11.044h11.923l1.7-7.637H159.177l1.7,4.817"
                transform="translate(0)" />
        </g>
    </svg>;
}