import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Title = () => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={30} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={30} color="#000000" />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.text1}>CARNAVAL</Text>
        <View style={styles.year}>
          <Text style={styles.text2}>- 2024 -</Text>
        </View>
        <Text style={styles.text3}>ETE - Ministro Fernando Lyra</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: '10%'
  },
  menuButton: {
    padding: 10,
  },
  searchButton: {
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: -20
  },
  text1: {
    fontSize: 30,
    color: '#F9CD0F',
    fontWeight: 'bold'
  },
  text2: {
    fontSize: 23,
    color: '#F9CD0F',
  },
  text3: {
    fontSize: 18,
    color: '#F9CD0F',
  },
  year: {
    backgroundColor: '#551956',
    width: 190,
    height: 30,
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: '#F9CD0F',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    alignItems: 'center'
  },
});

export default Title;
