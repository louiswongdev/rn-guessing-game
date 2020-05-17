import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const GameOverScreen = ({ roundsNumber, userNumber, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The Game is Over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/success.png')}
          resizeMode="cover"
        />
      </View>
      <Text style={DefaultStyles.bodyText}>
        Number of rounds: {roundsNumber}
      </Text>
      <Text style={DefaultStyles.bodyText}>Number was: {userNumber}</Text>
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
  imageContainer: {
    width: 260,
    height: 260,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#888',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
