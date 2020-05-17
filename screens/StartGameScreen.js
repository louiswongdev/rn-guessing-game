import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = inputText => {
    // replace any none numberic value with empty string
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={22}
            onChangeText={numberInputHandler}
            value={enteredValue}
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={() => {}}
                color={Colors.primary}
              />
            </View>
            <View style={styles.button}>
              <Button title="Reset" onPress={() => {}} color={Colors.accent} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
});
