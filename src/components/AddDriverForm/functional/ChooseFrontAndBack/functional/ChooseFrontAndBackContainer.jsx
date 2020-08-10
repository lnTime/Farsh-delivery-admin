import React, {useState} from 'react';
import { ChooseFrontAndBackUI } from '../ui/ChooseFrontAndBackUI';
import { useCallback } from 'react';

export const ChooseFrontAndBackContainer = ({image, setImage}) => {
    const [isFront, setIsFront] = useState(true);

    const handleFrontOpen = useCallback(() => {
        setIsFront(true);
    }, []);

    const handleBackOpen = useCallback(() => {
        setIsFront(false);
    }, []);

    const handleImageChange = e => {
        e.preventDefault();
        let file = e.target.files[0];

        if (isFront) {
            setImage({...image, front: file, isFrontChoosed: true, hasFrontError: false});
        } else {
            setImage({...image, back: file, isBackChoosed: true, hasBackError: false})
        }
    }

    return <ChooseFrontAndBackUI 
                isFront={isFront}
                handleFrontOpen={handleFrontOpen}
                handleBackOpen={handleBackOpen}
                handleImageChange={handleImageChange}
                isFrontChoosed={image.isFrontChoosed}
                isBackChoosed={image.isBackChoosed}
                hasFrontError={image.hasFrontError}
                hasBackError={image.hasBackError}
            />;
}