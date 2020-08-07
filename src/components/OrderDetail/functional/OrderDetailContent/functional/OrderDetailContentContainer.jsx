import React, { useMemo } from 'react';
import { OrderDetailContentUI } from '../ui/OrderDetailContentUI';

export const OrderDetailContentContainer = () => {
    const description = `Cras gravida bibendum dolor eu varius. 
    Morbi fermentum velit nisl, eget vehicula 
    lorem sodales eget. Donec quis volutpat orci. 
    Sed ipsum felis, tristique id egestas et, 
    convallis ac velit. In consequat dolor libero, 
    nec luctus orci rutrum nec. Phasellus vel arcu 
    sed nibh ornare accumsan. Vestibulum in elementum 
    erat. Interdum et malesuada fames ac ante ipsum 
    primis in faucibus. Aenean laoreet rhoncus ipsum 
    eget tempus. Praesent convallis fermentum sagittis.`;

    const slicedDescription = useMemo(() => description.slice(0, 255), []);

    return <OrderDetailContentUI description={slicedDescription}/>;
}