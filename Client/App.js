import React, { useState } from 'react';
import {
  NavigationContainer
} from "@react-navigation/native";
import BottomTabs from "./src/navigation/BottomTabs";
import AuthStack from "./src/navigation/AuthNavigator";

export default function App() {
    const [isSigned, setIsSigned] = useState(false);
  return (
      <NavigationContainer>
          {isSigned ? (<BottomTabs />) : (<AuthStack />)}
      </NavigationContainer>
      );
};