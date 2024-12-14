import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Index = () => {
  const [randomColor, setRandomColor] = useState('#000000');

  const handleClick = () => {
    const colorRange = '0123456789ABCDEF';
    let RandCol = '#';
    for (let i = 0; i < 6; i++) {
      RandCol += colorRange[Math.floor(Math.random() * 16)];
    }
    setRandomColor(RandCol);
  };

  return (
    <View style={[styles.container, { backgroundColor: randomColor }]}>
      <TouchableOpacity onPress={handleClick}>
        <View style={styles.btn}>
          <Text style={styles.btnTxt}>Click me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'white',
    width: 100,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: '600',
  },
});
