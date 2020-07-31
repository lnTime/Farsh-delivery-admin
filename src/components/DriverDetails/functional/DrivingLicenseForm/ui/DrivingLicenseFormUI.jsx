import React from 'react';
import './DrivingLicenseForm.scss';
import { FormHeaderContainer } from '../../FormHeader/functional/FormHeaderContainer';
import front from '../../../../../assets/images/driving-license-front.png';
import back from '../../../../../assets/images/driving-license-back.png';


export const DrivingLicenseFormUI = ({licenseType, licenseNumber, issueDate, expiryDate, 
    issuingCountry, issuingAuthority}) => {
    return (<div className="ProfileForm DrivingLicenseForm">
        <FormHeaderContainer formName="Driving License" />
        <div className="ProfileInfoBlock">
            <div>
                <span className="ProfileInfoBlock-InputName">License type</span>
                <span className="ProfileInfoBlock-InputValue">{licenseType}</span>
            </div>
            <div>   
                <span className="ProfileInfoBlock-InputName">License number</span>
                <span className="ProfileInfoBlock-InputValue">{licenseNumber}</span>
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
            <span className="ProfileInfoBlock-InputName">Driving License</span>
            <div className="ProfileInfoBlock-InputValue" id="idCard">
                <img 
                    alt="Driving License Front"
                    src={front}
                />
                <img 
                    alt="Driving License Back"
                    src={back}
                />
            </div>
        </div>
    </div>);
}