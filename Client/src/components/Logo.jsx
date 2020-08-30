import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{
        uri: 'https://cdn.freebiesupply.com/logos/thumbs/2x/tracker-1-logo.png'
      }} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 500,
    height: 200
  },
  logo: {
    maxWidth: 500,
    height: 200
  }
});

export default Logo;