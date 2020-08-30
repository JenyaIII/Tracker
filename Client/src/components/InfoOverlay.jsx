import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Overlay, Button, Text } from 'react-native-elements';

const InfoOverlay = ({ message }) => {
  const [visible, setVisible] = useState(message);  

  const toggleOverlay = () => {
    setVisible(false);
  };

  return(
    <View>
      <Overlay overlayStyle={styles.window} isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>{message}</Text>
        <Button type="outline" title="OK" onPress={toggleOverlay} />
      </Overlay>
    </View>
  )
};

const styles = StyleSheet.create({
  window: {
    height: 200,
    width: 350,
    borderRadius: 8,
  }
})

export default InfoOverlay;