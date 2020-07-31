import React from 'react';
import { FormHeaderUI } from '../ui/FormHeaderUI';

export const FormHeaderContainer = ({formName, handleClick}) => {
    return <FormHeaderUI formName={formName} handleClick={handleClick}/>;
}