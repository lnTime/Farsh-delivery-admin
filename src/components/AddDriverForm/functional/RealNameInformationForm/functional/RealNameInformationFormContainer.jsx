import React, { useMemo, useState } from 'react';
import { RealNameInformationFormUI } from '../ui/RealNameInformationFormUI';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getCountriesSelector } from '../../../../../redux/address/addressSelectors';
import { updateRealNameInformation, getIssuingAuthorities } from '../../../../../redux/driver/driverActions';
import { useDispatch } from 'react-redux';
import {getCities} from "../../../../../redux/address/addressActions";


export const RealNameInformationFormContainer = ({ setCurrentOnSubmit, setCurrentStep }) => {
    const idTypeOptions = useMemo(() => [{ value: 'PASSPORT', id: 'PASSPORT' }, { value: 'NATIONAL_ID', id: 'NATIONAL_ID' }], []);
    const [image, setImage] = useState({});
    const countries = useSelector(getCountriesSelector);
    const [issuingAuthorities, setIssuingAuthorities] = useState(null);

    const dispatch = useDispatch();

    const onSubmit = useCallback(formData => {
        dispatch(updateRealNameInformation(formData, image, setImage, setCurrentStep, countries));
    }, [image, setImage, setCurrentStep, countries, dispatch]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [setCurrentOnSubmit, onSubmit]);
    const customStateChange = useCallback((value) => {
        dispatch(getCities(value));
    }, [dispatch]);

    useEffect(() => {
        getIssuingAuthorities(setIssuingAuthorities);
    }, []);

    return <RealNameInformationFormUI
        idTypeOptions={idTypeOptions}
        image={image}
        setImage={setImage}
        countries={countries}
        customStateChange={customStateChange}
        issuingAuthorities={issuingAuthorities}
    />;
}
