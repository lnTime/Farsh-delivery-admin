import React from 'react';
import './RealNameInformation.scss';
import { Field } from 'redux-form';
import {SelectFieldContainer} from '../../../../common/inputs/SelectField/functional/SelectFieldContainer';
import {TextFieldContainer} from '../../../../common/inputs/TextField/functional/TextFieldContainer';
import {ChooseFileFieldContainer} from '../../../../common/inputs/ChooseFileField/functional/ChooseFileFieldContainer';

export const RealNameInformationFormUI = () => {
    return (<form className="AddDriver-Form">
        <div className="EvenInputs">
            <Field name="idType" 
                component={SelectFieldContainer}
                options={[{id: 1, value: 'AM'}]}
                placeholder="ID type"    
            />
            <Field 
                name="idNumber"
                component={TextFieldContainer}
                placeholder="ID No."
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
        <span className="AddDriverForm-FileUpload">Upload your National ID Card</span>
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