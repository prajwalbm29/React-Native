import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const passwordSchema = Yup.object({
  passwordLength: Yup.number()
    .typeError("Please enter a digit")
    .required("Password length is required")
    .min(4, "Password length should be a minimum of 4")
    .max(16, "Password length should be a maximum of 16")
});

export default function Index() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let charactersList = '';

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const num = "1234567890";
    const sym = "!@#$%^&*-+?";

    if (lowerCase) charactersList += lower;
    if (upperCase) charactersList += upper;
    if (numbers) charactersList += num;
    if (symbols) charactersList += sym;

    const passwordResult = createPassword(charactersList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: String, passwordLength: number) => {
    let result = "";

    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(charIndex);
    }

    return result;
  };

  const resetStates = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>

          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              generatePasswordString(Number(values.passwordLength));
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Password Length</Text>
                  {touched.passwordLength && errors.passwordLength && (
                    <Text style={styles.error}>{errors.passwordLength}</Text>
                  )}
                  <TextInput
                    style={styles.input}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex: 6"
                    keyboardType="numeric"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Includes Lowercase</Text>
                  <BouncyCheckbox
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#29ABB7"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Includes Uppercase</Text>
                  <BouncyCheckbox
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="#29ABB7"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Includes Numbers</Text>
                  <BouncyCheckbox
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#29ABB7"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Includes Symbols</Text>
                  <BouncyCheckbox
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#29ABB7"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={handleSubmit}
                    style={styles.actionButton}
                  >
                    <Text style={styles.actionText}>Generate Password</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      handleReset();
                      resetStates();
                    }}
                    style={styles.actionButton}
                  >
                    <Text style={styles.actionText}>Reset</Text>
                  </TouchableOpacity>
                </View>

                {isPassGenerated && (
                  <View style={styles.resultContainer}>
                    <Text style={styles.result} selectable={true}>{password}</Text>
                  </View>
                )}
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 5,
  },
  error: {
    fontSize: 12,
    color: '#FF0000',
    marginTop: 5,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    width: '100%',
    backgroundColor: '#FAFAFA',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#29ABB7',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#29ABB7',
  },
});
