import React, { useState, useEffect } from "react";
import { ProfileInfoFormUI } from "../ui/ProfileInfoFormUI";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getStates, getCities } from "../../../../../redux/address/addressActions";
import { getAddressSelector } from '../../../../../redux/address/addressSelectors';
import { SubmissionError, reset } from 'redux-form';

const transformData = (formData, image, phoneNumber) => {
    return ({
        firstName: formData.firstName,
        lastName: formData.lastName,
        profilePicture: image.file,
        mobileNumber: phoneNumber.mobileNumber,
        address: {
            state: formData.state,
            city: formData.city,
            address: formData.address,
            country: {
                countryName: formData.country,
                isoCode: 'sa'
            }
        },
        password: formData.password,
    });
}

export const ProfileInfoFormContainer = ({handleSubmit, error, setCurrentOnSubmit, setData, setCurrentStep}) => {
    const address = useSelector(getAddressSelector);
    const [image, setImage] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState({ mobileNumber: "", isValid: true, });

    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImage({file, src: reader.result, hasError: false});
        };
    }

    
    const onSubmit = (formData) => {
        if (formData.password !== formData.confirmPassword) {
            throw new SubmissionError({ confirmPassword: 'Please confirm the password.' })
        }     
        
        if (!image) {
            setImage({hasError: true});
            return false; 
        }

        if (!phoneNumber.mobileNumber || !phoneNumber.isValid) {
            setPhoneNumber({...phoneNumber, isValid: false});
            return false;
        }

        const transformedData = transformData(formData, image, phoneNumber);

        setData(data => ({...data, profile: {...transformedData} }));
        setCurrentStep(currentStep => currentStep + 1);
        dispatch(reset('add-driver'))
    }

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [image, phoneNumber]);


    useEffect(() => {
        dispatch(getCountries())
    }, []);

    const onPhoneNumberBlur = (isValid) => {
        setPhoneNumber({ ...phoneNumber, isValid });
    };

    const handlePhoneNumberChange = (isValid, newPhoneNumber) => {
        if (Number.isInteger(+newPhoneNumber[newPhoneNumber.length - 1]) || newPhoneNumber === '') {
            setPhoneNumber({ isValid: true, mobileNumber: newPhoneNumber });
        } else {
            setPhoneNumber({ ...phoneNumber, isValid });
        }
    };

    const customCountryChange = (value) => {
        dispatch(getStates(value));
    }

    const customStateChange = (value) => {
        dispatch(getCities(value));
    }


    return <ProfileInfoFormUI
        customCountryChange={customCountryChange}
        onPhoneNumberBlur={onPhoneNumberBlur}
        phoneNumber={phoneNumber}
        customStateChange={customStateChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
        countries={address.countries}
        states={address.states}
        cities={address.cities}
        handleSubmit={handleSubmit}
        error={error}
        handleImageChange={handleImageChange}
        src={image && image.src}
        hasError={image && image.hasError}
    />;
};
