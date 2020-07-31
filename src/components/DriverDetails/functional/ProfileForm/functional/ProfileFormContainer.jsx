import React from 'react';
import { ProfileFormUI } from '../ui/ProfileFormUI';

export const ProfileFormContainer = () => {
    const name = 'James Anderson',
        mobile = '(497)202-4478',
        country = 'Saudi Arabia',
        city = 'Makkah',
        state = 'Riyadh',
        address = 'Centria Mall, Olaya St, Riyadh 12241',
        password = 'some password';

    return <ProfileFormUI 
                name={name}
                mobile={mobile}
                country={country}
                state={state}
                address={address}
                password={password}
                city={city}
            />;
}