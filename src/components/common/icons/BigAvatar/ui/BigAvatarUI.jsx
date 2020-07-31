import React from 'react';
import './BigAvatar.scss';

export const BigAvatarUI = () => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        width="88"
        height="88"
        viewBox="0 0 88 88">
        <defs>
            <clipPath
                id="BigAvatar-A">
                <circle
                    className="BigAvatar-A"
                    cx="44"
                    cy="44"
                    r="44"
                    transform="translate(491 134)" />
            </clipPath>
        </defs>
        <g
            transform="translate(-491 -134)">
            <circle
                className="BigAvatar-A"
                cx="44"
                cy="44"
                r="44"
                transform="translate(491 134)" />
            <g
                className="BigAvatar-B">
                <ellipse
                    className="BigAvatar-C"
                    cx="32"
                    cy="31.5"
                    rx="32"
                    ry="31.5"
                    transform="translate(503 192)" />
                <circle
                    className="BigAvatar-C"
                    cx="13"
                    cy="13"
                    r="13"
                    transform="translate(521 163)" />
            </g>
        </g>
    </svg>;
}