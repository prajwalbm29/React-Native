import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as SMS from 'expo-sms';
import React, { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const mmsAvailable = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      alert("MMS is available");
    } else {
      alert("MMS is not availabel");
    }
  }

  const sendMMS = async () => {
    const { result } = await SMS.sendSMSAsync(
      number,
      message,
      // {
      //   attachments: {
      //     uri: 'path/myfile.png',
      //     mimeType: 'image/png',
      //     filename: 'myfile.png',
      //   },
      // }
    );
    if (result === "sent") {
      alert("Message sent sunncessfully");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo MMS Demo</Text>

      <Button
        title='Check ssm availabality'
        onPress={mmsAvailable}
      />

      <TextInput
        style={styles.input}
        placeholder='Enter Phone Number'
        value={number}
        onChangeText={setNumber}
        keyboardType='phone-pad'
      />

      <TextInput
        style={styles.input}
        placeholder='Enter Message'
        value={message}
        onChangeText={setMessage}
        keyboardType='text'
        multiline
      />

<Button
        title='Send Message'
        onPress={sendMMS}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "600",
    fontSize: 24
  },
  input: {
    width: 200,
    height: 50,
    margin: 20,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  }
});
