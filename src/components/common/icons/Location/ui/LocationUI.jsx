import React from "react";
import "./Location.scss";

export const LocationUI = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.707"
      height="17.707"
      viewBox="0 0 17.707 17.707"
    >
      <defs />
      <g transform="translate(-245.125 -334.705)">
        <circle
          class="Location-A"
          cx="6.219"
          cy="6.219"
          r="6.219"
          transform="translate(247.76 337.34)"
        />
        <circle
          class="Location-B"
          cx="2.273"
          cy="2.273"
          r="2.273"
          transform="translate(251.706 341.286)"
        />
        <g transform="translate(245.625 335.205)">
          <line class="Location-C" y2="2.135" transform="translate(8.354 14.572)" />
          <line class="Location-C" y2="2.135" transform="translate(8.354 0)" />
          <line class="Location-C" x1="2.135" transform="translate(0 8.354)" />
          <line class="Location-C" x1="2.135" transform="translate(14.572 8.354)" />
        </g>
      </g>
    </svg>
  );
};
