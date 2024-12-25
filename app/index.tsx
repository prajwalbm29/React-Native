import { Button, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'

import * as Haptics from 'expo-haptics';

import Icons from './components/icons';


const Index = () => {
  return (
    <View>
      <Text>Hello</Text>
      <Icons />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
})