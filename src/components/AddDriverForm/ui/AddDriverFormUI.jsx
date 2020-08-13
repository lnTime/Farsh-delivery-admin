import React from 'react';
import './AddDriverForm.scss';
import { NewDriverSectionsContainer } from '../functional/NewDriverSections/functional/NewDriverSectionsContainer';
import {reduxForm} from 'redux-form'

export const AddDriverForm = React.memo(({handleSubmit, onSubmit, Component, activeID, invalid, pristine, submitting, ...all}) => {
    return (
        <div className="AddDriver">
            <NewDriverSectionsContainer activeID={activeID}/>
            <form className="Wrapper" onSubmit={handleSubmit}>
                <Component {...all}/>
                <div className="Submission">
                    <button className="Submission-button Submission-button_white">Cancel</button>
                    <button 
                        className="Submission-button Submission-button_black" 
                        disabled={invalid || submitting || pristine}
                        type="submit">Next</button>
                </div>
            </form>
        </div>);
});

export const AddDriverFormUI = reduxForm({form: 'add-driver'})(React.memo(AddDriverForm))