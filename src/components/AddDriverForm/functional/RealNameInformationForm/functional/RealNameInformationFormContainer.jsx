import React, { useMemo, useState } from 'react';
import { RealNameInformationFormUI } from '../ui/RealNameInformationFormUI';
import { useEffect } from 'react';

export const RealNameInformationFormContainer = ({ setCurrentOnSubmit, setData, setCurrentStep }) => {

    const idTypeOptions = useMemo(() => [{ value: 'PASSPORT', id: 'PASSPORT' }, { value: 'NATIONAL_ID', id: 'NATIONAL_ID' }]);
    const [image, setImage] = useState({});

    const onSubmit = formData => {
        if (!image.isFrontChoosed) {
            setImage({ ...image, hasFrontError: true })
            return false;
        } else if (!image.isBackChoosed) {
            setImage({ ...image, hasBackError: true })
            return false;
        }

        const transformedData = {
            ...formData,
            realNameIssueCountry: {
                countryName: formData.issuingCountry,
                isoCode: 'sa',
            },
            idImgFront: image.front,
            idImgBack: image.back,
        }

        setData(data => ({
            ...data,
            realNameInformation: {
                ...transformedData
            },
        }));

        setCurrentStep(currentStep => currentStep + 1);
    }

    useEffect(() => {
        setCurrentOnSubmit(() => onSubmit);
    }, [image]);

    return <RealNameInformationFormUI
        idTypeOptions={idTypeOptions}
        image={image}
        setImage={setImage}
    />;
}