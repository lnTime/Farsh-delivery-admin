import React from 'react';

export const withSuspense = (Component) => {
    return (props) => <React.Suspense fallback={<h2>Loading...</h2>}><Component {...props}/></React.Suspense>
}