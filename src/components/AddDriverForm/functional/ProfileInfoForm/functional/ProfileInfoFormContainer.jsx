import React from 'react';
import { ProfileInfoFormUI } from '../ui/ProfileInfoFormUI';
import { useState } from 'react';

export const ProfileInfoFormContainer = () => {

    const [phoneNumber, setPhoneNumber] = useState({mobileNumber: '', isValid: true});

    const onPhoneNumberBlur = (isValid) => {
        setPhoneNumber({...phoneNumber, isValid});
    }

    const handlePhoneNumberChange = (isValid, newPhoneNumber) => {
        if (/^[0-9]*$/.test(newPhoneNumber)) {
            setPhoneNumber({isValid: true, mobileNumber: newPhoneNumber})        
        } else {
            setPhoneNumber({...phoneNumber, isValid});
        }
    }


    return <ProfileInfoFormUI
            onPhoneNumberBlur={onPhoneNumberBlur}
            phoneNumber={phoneNumber}
            handlePhoneNumberChange={handlePhoneNumberChange}
        />;
}