import React from 'react';
import App from "./App";
import { Provider as AuthProvider } from './src/context/AuthContext.js';

export default function Index() {
    return (
            <App />
    );
};