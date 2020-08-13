import React from 'react';
import './Warning.scss';

export const WarningUI = ({text}) => {
    return (<div className="Warning">
        <div className="Warning-Title">
            John, This item needs your attention!
        </div>
        <div className="Warning-Description">
            {text}
        </div>
        <div className="ButtonGroup">
            <button className="ButtonGroup-Button ButtonGroup-Button_white">Review</button>
            <button className="ButtonGroup-Button ButtonGroup-Button_black">Dismiss</button>
        </div>
    </div>);
}