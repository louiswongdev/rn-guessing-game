import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const GameOverScreen = ({ roundsNumber, userNumber, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over</Text>
      <Text>Number of rounds: {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={onRestartGame} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
