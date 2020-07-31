import React from 'react';
import { RealNameInformationFormUI } from '../ui/RealNameInformationFormUI';

export const RealNameInformationFormContainer = () => {

    const passport = 'Passport', 
        idNumber = '1321313123', 
        issueDate = '04/29/1972', 
        expiryDate = '04/29/1976', 
        issuingCountry = 'Riyadh', 
        issuingAuthority = 'Makkah';

    return <RealNameInformationFormUI 
            passport={passport} 
            idNumber={idNumber} 
            issueDate={issueDate} 
            expiryDate={expiryDate} 
            issuingCountry={issuingCountry} 
            issuingAuthority={issuingAuthority} />;
}