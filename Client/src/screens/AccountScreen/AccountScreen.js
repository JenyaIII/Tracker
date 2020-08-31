import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles.js';

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 28 }}>Account</Text>
        </View>
    )
};

export default AccountScreen;