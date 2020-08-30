import React, { useState, useContext } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native';
import { Text, Input, Button, Overlay } from 'react-native-elements';
import { AppLoading } from 'expo';
import { useFonts } from '@expo-google-fonts/inter';
import Spacer from "../components/Spacer";
import Logo from '../components/Logo';
import { Context as AuthContext } from '../context/AuthContext.js';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        signup({ email, password });
        setEmail('');
        setPassword('');
    }
    console.log('STATE', state);

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Logo />
                        <Spacer />
                        <Input
                            inputStyle={styles.email}
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                            leftIcon={{ name: 'email' }}
                            leftIconContainerStyle={styles.emailIcon}
                            inputContainerStyle={styles.inputContainer}
                        />
                        <Input
                            secureTextEntry
                            inputStyle={styles.password}
                            label="Password"
                            value={password}
                            onChangeText={setPassword}
                            leftIcon={{ name: 'security' }}
                            leftIconContainerStyle={styles.passwordIcon}
                            inputContainerStyle={styles.inputContainer}
                        />
                        {state.consoleMessage ? <Text style={styles.errorMessage}>{state.consoleMessage}</Text> : null}
                        <Spacer>
                            <Button
                                title="Sign Up"
                                onPress={handleSignUp}
                            />
                        </Spacer>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
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
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    },
    emailIcon: {
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        padding: 4
    },
    password: {
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    }, 
    passwordIcon: {
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        padding: 4
    },
    inputContainer: {
        borderBottomWidth: 0
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        display: 'flex',
        justifyContent: 'center'
    }
});

export default SignupScreen;