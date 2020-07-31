import React from 'react';
import { DrivingLicenseFormUI } from '../ui/DrivingLicenseFormUI';


export const DrivingLicenseFormContainer = () => {

    const licenseType = 'James', 
        licenseNumber = 'Anderson', 
        issueDate = '04/29/1972', 
        expiryDate = '04/29/1976', 
        issuingCountry = 'Riyadh', 
        issuingAuthority = 'Makkah';

    return <DrivingLicenseFormUI 
        licenseType={licenseType} 
        licenseNumber={licenseNumber}
        issueDate={issueDate}
        expiryDate={expiryDate}
        issuingCountry={issuingCountry}
        issuingAuthority={issuingAuthority}
    />;
}