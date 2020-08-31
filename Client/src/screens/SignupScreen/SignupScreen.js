import React, { useState, useContext } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native';
import { Text, Input, Button, Overlay } from 'react-native-elements';
import Spacer from "../../components/Spacer";
import Logo from '../../components/Logo';
import { Context as AuthContext } from '../../context/AuthContext.js';
import { styles } from './Styles.js';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        signup({ email, password });
        setEmail('');
        setPassword('');
    }

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

export default SignupScreen;