import React, { useState, useEffect } from "react";
import { ProfileInfoFormUI } from "../ui/ProfileInfoFormUI";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getStates, getCities, getCountryNameByISOCode } from "../../../../../redux/address/addressActions";
import { getAddressSelector } from '../../../../../redux/address/addressSelectors';
import { SubmissionError, reset } from 'redux-form';
import { useCallback } from "react";

const addData = (setData, formData, image, phoneNumber, countries) => {
    setData(data => {
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('profilePicture', image.file);
        data.append('mobileNumber', phoneNumber.mobileNumber);
        data.append('address.state', formData.state);
        data.append('address.city', formData.city);
        data.append('address.address', formData.address);
        data.append('address.country.countryName', getCountryNameByISOCode(countries, formData.country));
        data.append('address.country.isoCode', formData.country);
        data.append('password', formData.password);
        return data;
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

    
    const onSubmit = useCallback((formData) => {
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

        addData(setData, formData, image, phoneNumber, address.countries);
        setCurrentStep(currentStep => currentStep + 1);
        dispatch(reset('add-driver'))
    }, [image, setData, setCurrentStep, dispatch, setPhoneNumber, phoneNumber]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [setCurrentOnSubmit, onSubmit]);


    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

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
