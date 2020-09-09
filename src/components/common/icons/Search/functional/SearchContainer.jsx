import React from 'react';
import { SearchUI } from '../ui/SearchUI';

export const SearchContainer = ({className = '', ...custom}) => {
    return <div className={className} {...custom}>
        <SearchUI />
    </div>;
}