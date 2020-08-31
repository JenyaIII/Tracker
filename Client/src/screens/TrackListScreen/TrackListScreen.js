import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './Styles';

const TrackListScreen = ({ navigation }) => {
    console.log('NAV', navigation);
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 28 }}>Track List</Text>
            <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetailScreen') } />
        </View>
    )
};

export default TrackListScreen;