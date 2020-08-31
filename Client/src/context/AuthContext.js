import AsyncStorage from '@react-native-community/async-storage';
import DataContext from './DataContext.js';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_err': 
            return { ...state, consoleMessage: action.payload, loading: false };
        case 'user_created':
            return { consoleMessage: '', token: action.payload };
        case 'loader':
            return { loading: action.payload };
        default:
            return state;
    }
};

const signup = ( dispatch ) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log('response', response);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'loader', payload: true })
            dispatch({ type: 'user_created', payload: response.data.token });
            if (response.data.token) {
                dispatch({ type: 'loader', payload: false })
            }
            navigate('TrackListScreen')
        } catch (err) {
            dispatch({ type: 'add_err', payload: 'kek' });
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
    { token: null, consoleMessage: '', loading: false },
);