import React from 'react';
import './AddDriverForm.scss';
import { NewDriverSectionsContainer } from '../functional/NewDriverSections/functional/NewDriverSectionsContainer';
import { VendorFormContainer } from '../functional/VendorForm/functional/VendorFormContainer';

export const AddDriverFormUI = () => {
    return (
        <div className="AddDriver">
            <NewDriverSectionsContainer />
            <div className="Wrapper">
                <VendorFormContainer />
                <div className="Submission">
                    <button className="Submission-button Submission-button_white">Cancel</button>
                    <button className="Submission-button Submission-button_black">Next</button>
                </div>
            </div>
        </div>);
}