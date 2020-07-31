import React from 'react';
import { AddDriverFormUI } from '../ui/AddDriverFormUI';
import {reduxForm} from 'redux-form';

const AddDriverForm = () => {
    return <AddDriverFormUI />;
}

export const AddDriverFormContainer = reduxForm({form: 'add-driver'})(AddDriverForm);