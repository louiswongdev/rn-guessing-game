import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = ({ roundsNumber, userNumber, onRestartGame }) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get('window').width,
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get('window').height,
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get('window').width);
      setAvailableDeviceHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  }, [Dimensions]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={DefaultStyles.title}>The Game is Over</Text>
        <View
          style={{
            ...styles.imageContainer,
            ...{
              width: availableDeviceWidth * 0.7,
              height: availableDeviceWidth * 0.7,
              borderRadius: (availableDeviceWidth * 0.7) / 2,
              marginVertical: availableDeviceHeight / 30,
            },
          }}
        >
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
            Your phone needed{' '}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
        </View>
        <MainButton onPress={onRestartGame}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: '#888',
    overflow: 'hidden',
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
    fontSize: Dimensions.get('window').height < 600 ? 16 : 20,
  },
  resultContainer: {
    marginHorizontal: 50,
    marginVertical: Dimensions.get('window').width / 60,
  },
});
