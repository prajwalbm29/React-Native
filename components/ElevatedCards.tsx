import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={styles.card}>
                    <Text>Tap</Text>
                </View>
                <View style={styles.card}>
                    <Text>and</Text>
                </View>
                <View style={styles.card}>
                    <Text>scroll</Text>
                </View>
                <View style={styles.card}>
                    <Text>left</Text>
                </View>
                <View style={styles.card}>
                    <Text>for</Text>
                </View>
                <View style={styles.card}>
                    <Text>more..</Text>
                </View>
            </ScrollView>
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
        margin: 10
    },

    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#CAD5E2',
        margin: 10,
        borderRadius: 10,
        elevation: 10,
        shadowOffset: {
            width: 10,
            height: 10
        },
        padding: 10
    }
})