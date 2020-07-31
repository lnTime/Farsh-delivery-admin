import React from 'react';
import './DrivingLicenseForm.scss';
import {Field} from 'redux-form';
import {SelectFieldContainer} from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import {TextFieldContainer} from '../../../../common/inputs/TextField/functional/TextFieldContainer';
import {ChooseFileFieldContainer} from '../../../../common/inputs/ChooseFileField/functional/ChooseFileFieldContainer';

export const DrivingLicenseFormUI = () => {
    return (<form className="AddDriver-Form">
        <div className="EvenInputs">
            <Field name="licenseType" 
                component={SelectFieldContainer}
                options={[{id: 1, value: 'AM'}]}
                placeholder="License type"    
            />
            <Field 
                name="licenseNumber"
                component={TextFieldContainer}
                placeholder="License number"
            />
        </div>
        <div className="EvenInputs">
            <Field 
                name="issueDate"
                component={TextFieldContainer}
                placeholder="Issue date"
            />
            <Field 
                name="expiryDate"
                component={TextFieldContainer}
                placeholder="Expiry date"
            />
        </div>
        <div className="EvenInputs">
            <Field 
                name="issuingCountry"
                placeholder="Issuing country"
                component={SelectFieldContainer}
                options={[{id: 1, value: 'Armenia'}]}
            />
            <Field 
                name="issuingAuthority"
                placeholder="Issuing Authority"
                component={SelectFieldContainer}
                options={[{id: 1, value: 'Auth'}]}
            />
        </div>
        <span className="AddDriverForm-FileUpload">Upload your Driving License</span>
        <div className="FileUploadWrapper">
            <div className="AddDriverFormButtonGroup">
                <button 
                    type="button"
                    className="AddDriverFormButtonGroup-Button AddDriverFormButtonGroup-Button_blackBorder">
                    Front
                </button>
                <button
                    type="button" 
                    className="AddDriverFormButtonGroup-Button AddDriverFormButtonGroup-Button_noBorder">
                    Back
                </button>
            </div>
            <ChooseFileFieldContainer />
        </div>
    </form>);
}