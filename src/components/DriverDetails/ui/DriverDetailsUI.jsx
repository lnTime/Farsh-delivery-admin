import React from 'react';
import './DriverDetails.scss';
import {DriverDetailsHeaderContainer} from '../functional/DriverDetailsHeader/functional/DriverDetailsHeaderContainer'
import {ProfileFormContainer} from '../functional/ProfileForm/functional/ProfileFormContainer';
import { VendorFormContainer } from '../functional/VendorForm/functional/VendorFormContainer';
import {RealNameInformationFormContainer} from '../functional/RealNameInformationForm/functional/RealNameInformationFormContainer';
import { VehicleFormContainer } from '../functional/VehicleForm/functional/VehicleFormContainer';
import {DrivingLicenseFormContainer} from '../functional/DrivingLicenseForm/functional/DrivingLicenseFormContainer'
import { DriverHistoryContainer } from '../functional/DriverHistory/functional/DriverHistoryContainer';

export const DriverDetailsUI = () => {
    return (<div className="DriverDetails">
        <DriverDetailsHeaderContainer />
        <div className="Forms">
            <div className="Combiner" id="margined">
                <ProfileFormContainer />
                <DrivingLicenseFormContainer />
            </div>
            <div className="Combiner" id="second">
                <VendorFormContainer />
                <RealNameInformationFormContainer />
                <VehicleFormContainer />
            </div>            
            <DriverHistoryContainer />
        </div>
    </div>)
}