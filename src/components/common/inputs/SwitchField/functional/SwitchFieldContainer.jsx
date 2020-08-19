import React from 'react';
import { SwitchFieldUI } from '../ui/SwitchFieldUI';

export const SwitchFieldContainer = (props) => {
    console.log('Props', props);
    return <SwitchFieldUI {...props}/>;
}