import DataContext from './DataContext.js';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const { Provider, Context } = DataContext(
    authReducer,
    {},
    { isSignedIn: false },
);