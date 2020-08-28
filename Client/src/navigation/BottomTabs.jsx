import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TrackCreateScreen from "../screens/TrackCreateScreen";
import AccountScreen from "../screens/AccountScreen";
import TrackListStackScreen from "./TrackListStackScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Track List Flow"
            shifting={true}
            sceneAnimationEnabled={true}
        >
            <Tab.Screen
                name="Track List Flow"
                component={TrackListStackScreen}
                options={{
                    tabBarIcon: 'compass'
                }}
            />
            <Tab.Screen
                name="Create Track"
                component={TrackCreateScreen}
                options={{
                    tabBarIcon: 'home-account'
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: 'bell-outline'
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;

