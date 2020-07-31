import React from 'react';
import { SearchUI } from '../ui/SearchUI';

export const SearchContainer = ({className = ''}) => {
    return <div className={className}>
        <SearchUI />
    </div>;
}