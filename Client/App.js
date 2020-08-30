import React, { useState } from 'react';
import {
  NavigationContainer
} from "@react-navigation/native";
import BottomTabs from "./src/navigation/BottomTabs";
import AuthStack from "./src/navigation/AuthNavigator";
import { Provider as AuthProvider } from './src/context/AuthContext.js';

export default function App() {
    const [isSigned, setIsSigned] = useState(false);
  return (
    <AuthProvider>
      <NavigationContainer>
          {isSigned ? (<BottomTabs />) : (<AuthStack />)}
      </NavigationContainer>
    </AuthProvider>
      );
};