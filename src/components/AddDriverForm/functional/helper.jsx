import React from 'react';
import { ProfileInfoFormContainer } from './ProfileInfoForm/functional/ProfileInfoFormContainer';
import {withSuspense} from '../../common/hoc/withSuspense'

const RealNameInformationFormContainer = React.lazy(() => 
    import('./RealNameInformationForm/functional/RealNameInformationFormContainer')
    .then(module => ({ default: module.RealNameInformationFormContainer })));

const DrivingLicenseContainer = React.lazy(() => 
    import('./DrivingLicenseForm/functional/DrivingLicenseContainer')
    .then(module => ({ default: module.DrivingLicenseContainer })));

const VehicleInfoFormContainer = React.lazy(() =>
    import('./VehicleInfoForm/functional/VehicleInfoFormContainer')
    .then(module => ({ default: module.VehicleInfoFormContainer })));

const VendorFormContainer = React.lazy(() =>
    import('./VendorForm/functional/VendorFormContainer')
    .then(module => ({ default: module.VendorFormContainer })));

const ActivationFormContainer = React.lazy(() => 
    import('./ActivationForm/functional/ActivationFormContainer')
    .then(module => ({ default: module.ActivationFormContainer})))

export const getComponent = (step) => {
    switch (step) {
        case 1:
            return ProfileInfoFormContainer;
        case 2:
            return withSuspense(RealNameInformationFormContainer);
        case 3:
            return withSuspense(DrivingLicenseContainer);
        case 4:
            return withSuspense(VehicleInfoFormContainer);
        case 5:
            return withSuspense(VendorFormContainer);
        case 6:
            return withSuspense(ActivationFormContainer)
        default:
            return null;
    }
}
