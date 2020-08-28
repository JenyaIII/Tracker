import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TrackListScreen from "../screens/TrackListScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";

const Stack = createStackNavigator();

export default function TrackListStackScreen() {
    return (
        <Stack.Navigator initialRouteName="TrackListScreen" >
            <Stack.Screen name="TrackListScreen" component={TrackListScreen} />
            <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
        </Stack.Navigator>
    );
}