import React from 'react';
import './AddDriverForm.scss';
import { NewDriverSectionsContainer } from '../functional/NewDriverSections/functional/NewDriverSectionsContainer';
import {reduxForm} from 'redux-form'

export const AddDriverForm = ({handleSubmit, component, activeID}) => {
    return (
        <div className="AddDriver">
            <NewDriverSectionsContainer activeID={activeID}/>
            <div className="Wrapper">
                {component}
                <div className="Submission">
                    <button className="Submission-button Submission-button_white">Cancel</button>
                    <button className="Submission-button Submission-button_black" onClick={handleSubmit}>Next</button>
                </div>
            </div>
        </div>);
}

export const AddDriverFormUI = reduxForm({form: 'add-driver'})(AddDriverForm)