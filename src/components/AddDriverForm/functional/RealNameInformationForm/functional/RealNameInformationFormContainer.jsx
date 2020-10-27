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
    const countries = useSelector(getCountriesSelector);
    const [issuingAuthorities, setIssuingAuthorities] = useState(null);

    const dispatch = useDispatch();

    const onSubmit = useCallback(formData => {
        dispatch(updateRealNameInformation(formData, setCurrentStep, countries));
    }, [setCurrentStep, countries, dispatch]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [setCurrentOnSubmit, onSubmit]);
    const customStateChange = useCallback((value) => {
        dispatch(getCities(value));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getIssuingAuthorities(setIssuingAuthorities));
    }, [dispatch]);

    return <RealNameInformationFormUI
        idTypeOptions={idTypeOptions}
        countries={countries}
        customStateChange={customStateChange}
        issuingAuthorities={issuingAuthorities}
    />;
}
