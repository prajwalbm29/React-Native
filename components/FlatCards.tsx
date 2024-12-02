import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View >
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Orange</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
            <Text>Greay</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        marginHorizontal: 10,
        fontSize: 24,
        fontWeight: 500
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },

    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 10
    },

    cardOne: {
        backgroundColor: 'orange'
    },

    cardTwo: {
        backgroundColor: 'lightgreen'
    },

    cardThree: {
        backgroundColor: 'red'
    },

    cardFour: {
        backgroundColor: 'grey'
    }
})