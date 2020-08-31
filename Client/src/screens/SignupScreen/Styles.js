import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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