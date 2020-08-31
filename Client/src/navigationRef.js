import React, { createRef } from 'react';

export const navigationRef = createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

// let navigator;
//
// export const setNavigator = (nav) => {
//     navigator = nav;
// };
//
// export const navigate = (routeName, params) => {
//     navigator.dispatch(
//         NavigationActions.navigate({
//             routeName,
//             params
//         })
//     );
// };