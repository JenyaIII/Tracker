import React, { useContext } from 'react';
import { navigationRef } from "./navigationRef";
import BottomTabs from "./navigation/BottomTabs";
import AuthStack from "./navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Context as AuthContext } from './context/AuthContext';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import Spacer from "./components/Spacer";


const ComponentsContainer = () => {
    const { state } = useContext(AuthContext);
    console.log('VASHE KAZINO', state );

    if (state.loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="grey" />
                <Spacer />
                <Text style={styles.title}>Loading ...</Text>
            </View>
            )
    } else if (state.token) {
        return (
            <>
                <NavigationContainer ref={navigationRef}>
                    <BottomTabs />
                </NavigationContainer>
            </>
        )
    } else {
        return (
            <>
                <NavigationContainer ref={navigationRef}>
                    <AuthStack />
                </NavigationContainer>
            </>
        )
    }
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        alignSelf: 'center',
        fontSize: 30,
        fontFamily: 'Cochin'
    }
})

export default ComponentsContainer;
