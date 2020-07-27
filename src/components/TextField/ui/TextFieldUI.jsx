import React from 'react';
import { Field } from 'redux-form';

export const TextFieldUI = () => {
    return (
        <div>
            <Field
                placeholder='username'
                component="input" />
        </div>
    )
}