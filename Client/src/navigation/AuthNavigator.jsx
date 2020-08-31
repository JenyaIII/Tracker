import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import SigninScreen from "../screens/SigninScreen/SigninScreen";
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Signup" >
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Signin" component={SigninScreen} />
        </Stack.Navigator>
        );
}