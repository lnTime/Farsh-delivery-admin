import React from 'react';
import './FormHeader.scss';

export const FormHeaderUI = ({formName}) => {
    return (<div className="FormHeader">
        <span className="FormHeader-FormName">{formName}</span>
        <div>
            
        </div>
    </div>);
}