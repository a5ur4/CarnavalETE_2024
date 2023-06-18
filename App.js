import * as React from 'react';
import { ImageBackground, View, StyleSheet, ScrollView } from 'react-native';

import Title from './components/title';
import Firstlist from './components/firstlist';
import Secondlist from './components/secondlist';
import Footer from './components/footer';

const image = { uri: 'https://static.vecteezy.com/system/resources/previews/009/345/318/original/confetti-and-tinsel-explosion-background-realistic-multicolor-confetti-vector-illustration-colorful-confetti-isolated-on-transparent-background-carnival-elements-birthday-party-celebration-free-png.png' };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <Title />
          <View style={styles.space} />
          <Firstlist />
          <View style={styles.space} />
          <Secondlist />
          <View style={styles.space} />
          <Footer />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BA154D',
    flex: 1,
  },
  image: {
    flex: 1,
  },
  space: {
    height: 20,
  },
});
