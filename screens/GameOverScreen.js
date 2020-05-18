import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = ({ roundsNumber, userNumber, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The Game is Over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require('../assets/success.png')}
          // source={{
          //   uri:
          //     'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'
          // }}
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={[DefaultStyles.bodyText, styles.resultText]}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
      </View>
      <MainButton onPress={onRestartGame}>NEW GAME</MainButton>
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
  highlight: {
    color: Colors.primary,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
  resultContainer: {
    marginHorizontal: 50,
    marginVertical: 12,
  },
});
