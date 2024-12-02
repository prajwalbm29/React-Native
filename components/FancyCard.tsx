import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

export default function FancyCard({path, title, description}) {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={styles.container}>
        <Image 
        source={{
            uri: path
        }}
        style={styles.cardImage}
        />
        <Text style={styles.cardHeading}>{title}</Text>
        <Text style={styles.cardText}>{description}</Text>
      </View>
    </View>
  )
}

FancyCard.defaultProps = {
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKd2EHuREosmBfApydTo14VdEmdJXo1koCzg&s",
    title: "Bhoga Nandishwara Temple",
    description: "No Description"
}

FancyCard.PropTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

const styles = StyleSheet.create({
    headingText: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 24,
        fontWeight: 500
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'black'
    },
    cardImage: {
        width: 350,
        height: 200
    },

    cardHeading: {
        color: 'white',
        fontSize: 20,
        fontWeight: 500
    },

    cardText: {
        color: 'white'
    }
})