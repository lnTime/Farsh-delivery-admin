import React, { useMemo } from 'react';
import { RealNameInformationFormUI } from '../ui/RealNameInformationFormUI';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getCountriesSelector } from '../../../../../redux/address/addressSelectors';
import { updateRealNameInformation } from '../../../../../redux/driver/driverActions';
import { useDispatch } from 'react-redux';
import {getCities} from "../../../../../redux/address/addressActions";
import {getIssuingAuthorities} from "../../../../../redux/static/staticActions";
import {getRealNameIssuingAuthoritiesSelector} from "../../../../../redux/static/staticSelectors";


export const RealNameInformationFormContainer = ({ setCurrentOnSubmit, setCurrentStep }) => {
    const idTypeOptions = useMemo(() => [{ value: 'PASSPORT', id: 'PASSPORT' }, { value: 'NATIONAL_ID', id: 'NATIONAL_ID' }], []);
    const countries = useSelector(getCountriesSelector);
    const issuingAuthorities = useSelector(getRealNameIssuingAuthoritiesSelector);

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
        dispatch(getIssuingAuthorities());
    }, [dispatch]);

    return <RealNameInformationFormUI
        idTypeOptions={idTypeOptions}
        countries={countries}
        customStateChange={customStateChange}
        issuingAuthorities={issuingAuthorities}
    />;
}
