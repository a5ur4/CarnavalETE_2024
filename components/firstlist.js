import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Firstlist = () => {
  const blocks = [
    { id: 1, color: '#F9CD0F', text: '190', image: 'https://cdn-icons-png.flaticon.com/512/26/26300.png' },
    { id: 2, color: '#F9CD0F', text: '192', image: 'https://cdn-icons-png.flaticon.com/512/1976/1976701.png' },
    { id: 3, color: '#F9CD0F', text: '193', image: 'https://cdn-icons-png.flaticon.com/512/7341/7341048.png' },
  ];

  const handleBlockPress = (id) => {
    console.log(`Block ${id} pressed!`);
  };

  return (
    <View>
      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/014/386/199/original/carnival-mask-illustration-png.png' }}
        style={{ width: 75, height: 60, transform: [{ rotate: '-30deg' }], zIndex: 2,  top: -20, left: 10 }}
      />
      <View style={styles.container}>
        {blocks.map((block) => (
          <View key={block.id} style={[styles.block, { backgroundColor: block.color }]}>
            <TouchableOpacity
              key={block.id}
              style={[styles.block, { backgroundColor: block.color }]}
              onPress={() => handleBlockPress(block.id)}
            >
              <Image source={{ uri: block.image }} style={styles.image} />
              <Text style={styles.text}>{block.text}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Image
        source={{ uri: 'https://png.pngtree.com/png-vector/20230114/ourmid/pngtree-carnival-mask-design-png-image_6561961.png' }}
        style={{ width: 75, height: 60, transform: [{ rotate: '30deg' }], zIndex: 2, position: 'absolute', bottom: -20, right: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: -45
  },
  block: {
    width: 85,
    height: 110,
    borderRadius: 10,
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 15,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold'
  }
});

export default Firstlist;
