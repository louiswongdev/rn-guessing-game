import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Colors from '../constants/colors';

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 80,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
  headerTitle: {
    // color: 'black',
    color: Platform.OS === 'ios' ? Colors.primary : 'white',
    fontSize: 18,
    fontFamily: 'open-sans',
  },
});
