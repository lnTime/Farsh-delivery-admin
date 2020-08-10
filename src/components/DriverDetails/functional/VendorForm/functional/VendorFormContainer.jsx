import React from 'react';
import  VendorFormUI  from '../ui/VendorFormUI';
import {useEditMode} from '../../../../common/custom-hooks/useEditMode';

export const VendorFormContainer = () => {
    const [isEdit, handleClick] = useEditMode();

    const vendor = 'Neque augue';
    return <VendorFormUI isEdit = {isEdit} handleClick = {handleClick} vendor={vendor}/>;
}