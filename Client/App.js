import React from 'react';
import { Provider as AuthProvider } from './src/context/AuthContext.js';
import ComponentsContainer from "./src/componentsContainer";

export default function App() {
  return (
    <AuthProvider>
      <ComponentsContainer />
    </AuthProvider>
      );
};