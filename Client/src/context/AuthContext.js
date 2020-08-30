import { AsyncStorage } from 'react-native';
import DataContext from './DataContext.js';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_err': 
            return { ...state, consoleMessage: action.payload };
        case 'user_created':
            return { consoleMessage: '', token: action.payload }
        default:
            return state;
    }
};

const signup = ( dispatch ) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'user_created', payload: response.data.token })
        } catch (err) {
            dispatch({ type: 'add_err', payload: err.response.data.message })
        }

    };
};

const signin = ( dispatch ) => {
    return ({ email, password }) => {
        
    };
};

const signout = ( dispatch ) => {
    return () => {
        
    };
};

export const { Provider, Context } = DataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, consoleMessage: '' },
);