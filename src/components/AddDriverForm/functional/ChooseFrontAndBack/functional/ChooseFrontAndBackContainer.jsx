import React, {useState} from 'react';
import { ChooseFrontAndBackUI } from '../ui/ChooseFrontAndBackUI';
import { useCallback } from 'react';

export const ChooseFrontAndBackContainer = ({imageOnly}) => {
    const [isFront, setIsFront] = useState(true);

    const handleFrontOpen = useCallback(() => {
        setIsFront(true);
    }, []);

    const handleBackOpen = useCallback(() => {
        setIsFront(false);
    }, []);

    return <ChooseFrontAndBackUI 
                isFront={isFront}
                handleFrontOpen={handleFrontOpen}
                handleBackOpen={handleBackOpen}
                imageOnly={imageOnly}
            />;
}