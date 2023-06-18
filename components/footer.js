import * as React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Footer = () => {
  const openWebsite = () => {
    Linking.openURL('http://www.etemfl.com.br/');
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={openWebsite}>
          <Text>
            Copyright © ETE - MFL
          </Text>
          <Text>
            2023~2024
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: 'https://files.passeidireto.com/a8abb34b-5736-4953-81f2-5aa066cbeef1/a8abb34b-5736-4953-81f2-5aa066cbeef1.png' }}
        style={styles.mask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9cd0f',
    height: 60,
    marginTop: -30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
  },
  mask: {
    width: 65,
    height: 60,
    position: 'absolute',
    top: 0,
    right: 0,
    transform: [{ rotate: '30deg' }],
    zIndex: 2,
    marginRight: 10,
    marginTop: -65,
  },
});

export default Footer;
