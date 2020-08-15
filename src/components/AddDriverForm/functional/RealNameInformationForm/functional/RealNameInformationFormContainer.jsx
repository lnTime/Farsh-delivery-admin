import React, { useMemo, useState } from 'react';
import { RealNameInformationFormUI } from '../ui/RealNameInformationFormUI';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getCountriesSelector } from '../../../../../redux/address/addressSelectors';
import { getCountryNameByISOCode } from '../../../../../redux/address/addressActions';


export const RealNameInformationFormContainer = ({ setCurrentOnSubmit, setData, setCurrentStep }) => {
    const idTypeOptions = useMemo(() => [{ value: 'PASSPORT', id: 'PASSPORT' }, { value: 'NATIONAL_ID', id: 'NATIONAL_ID' }], []);
    const [image, setImage] = useState({});
    const countries = useSelector(getCountriesSelector);

    const onSubmit = useCallback(formData => {
        if (!image.isFrontChoosed) {
            setImage({ ...image, hasFrontError: true })
            return false;
        } else if (!image.isBackChoosed) {
            setImage({ ...image, hasBackError: true })
            return false;
        }
        
        setData(data => {
            data.append('realNameIdType', formData.realNameIdType);
            data.append('realNameIdNo', formData.realNameIdNo);
            data.append('realNameIssueDate', formData.realNameIssueDate);
            data.append('realNameExpiryDate', formData.realNameExpiryDate);
            data.append('realNameIssueCountry.countryName', getCountryNameByISOCode(countries, formData.issuingCountry));
            data.append('realNameIssueCountry.isoCode', formData.issuingCountry);
            data.append('realNameIssueAuthority', formData.issuingAuthority);
            data.append('idImgFront', image.front);
            data.append('idImgBack', image.back);
            return data;
        });

        setCurrentStep(currentStep => currentStep + 1);
    }, [setData, image, setCurrentStep]);

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [setCurrentOnSubmit, onSubmit]);

    return <RealNameInformationFormUI
        idTypeOptions={idTypeOptions}
        image={image}
        setImage={setImage}
        countries={countries}
    />;
}