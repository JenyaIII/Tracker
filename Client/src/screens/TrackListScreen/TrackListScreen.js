import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    console.log('NAV', navigation);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 45 }}>
            <Text style={{ fontSize: 28 }}>Track List</Text>
            <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetailScreen') } />
        </View>
    )
};

const styles = StyleSheet.create({});

export default TrackListScreen;