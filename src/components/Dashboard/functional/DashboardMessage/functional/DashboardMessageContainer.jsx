import React, { useMemo } from 'react';
import { DashboardMessageUI } from '../ui/DashboardMessageUI';

export const DashbardMessageContainer = () => {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.';
    const text = useMemo(() => description.slice(0, 40), [description]);

    return <DashboardMessageUI text={text} />;
}