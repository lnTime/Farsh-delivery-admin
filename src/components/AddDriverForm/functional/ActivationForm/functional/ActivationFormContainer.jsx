import React, { useState } from 'react';
import { ActivationFormUI } from '../ui/ActivationFormUI';

export const ActivationFormContainer = () => {
    const [activated, setActivated] = useState(true);

    return <ActivationFormUI 
        activated={activated}
        setActivated={setActivated}
    />;
}