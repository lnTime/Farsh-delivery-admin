import React from 'react';
import './RealNameInformationForm.scss';
import { FormHeaderContainer } from '../../FormHeader/functional/FormHeaderContainer';
import {IdCardContainer} from '../../../../common/icons/IdCard/functional/IdCardContainer';

export const RealNameInformationFormUI = ({passport, idNumber, issueDate, expiryDate, issuingCountry, issuingAuthority}) => {
    return (<div className="RealNameInformationForm ProfileForm">
        <FormHeaderContainer formName="Real name information" />
        <div className="ProfileInfoBlock">
            <div>
                <span className="ProfileInfoBlock-InputName">ID type</span>
                <span className="ProfileInfoBlock-InputValue">{passport}</span>
            </div>
            <div>
                <span className="ProfileInfoBlock-InputName">ID No.</span>
                <span className="ProfileInfoBlock-InputValue">{idNumber}</span>
            </div>
        </div>
        <div className="ProfileInfoBlock">
            <div>
                <span className="ProfileInfoBlock-InputName">Issue date</span>
                <span className="ProfileInfoBlock-InputValue">{issueDate}</span>
            </div>
            <div>
                <span className="ProfileInfoBlock-InputName">Expiry date</span>
                <span className="ProfileInfoBlock-InputValue">{expiryDate}</span>
            </div>
        </div>
        <div className="ProfileInfoBlock">
            <div>
                <span className="ProfileInfoBlock-InputName">Issuing country</span>
                <span className="ProfileInfoBlock-InputValue">{issuingCountry}</span>
            </div>
            <div>   
                <span className="ProfileInfoBlock-InputName">Issuing Authority</span>
                <span className="ProfileInfoBlock-InputValue">{issuingAuthority}</span>
            </div>
        </div>
        <div  className="ProfileInfoBlock ProfileInfoBlock_oneItem">
            <span className="ProfileInfoBlock-InputName">National ID card</span>
            <div className="ProfileInfoBlock-InputValue" id="idCard">
                <IdCardContainer />
                <IdCardContainer />
            </div>
        </div>
    </div>);
}