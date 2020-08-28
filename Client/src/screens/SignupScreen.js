import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { AppLoading } from 'expo';
import { useFonts } from '@expo-google-fonts/inter';
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        'Roboto': require('../../assets/fonts/Roboto-ThinItalic.ttf')
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.title}>TRACKER</Text>
                        </View>
                        <Input
                            inputStyle={styles.email}
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Spacer/>
                        <Input
                            secureTextEntry
                            label="Password"
                            value={password}
                            onChangeText={setPassword}
                        />
                        <Spacer>
                            <Button title="Sign Up"/>
                        </Spacer>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
    },
    titleWrapper: {
        flex: 0.4,
        alignItems: 'center',
        marginBottom: 25
    },
    title: {
        fontFamily: 'Roboto',
        color: 'grey',
        fontSize: 88
    },
    email: {
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        borderBottomWidth: 0
    }
});

export default SignupScreen;