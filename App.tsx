import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';

const SplashScreen = () => {
  useEffect(() => {
    // Simulate a loading time or any async operation here
    setTimeout(() => {
      // Navigate to the main app screen or any other action after splash screen
      // For example, you might navigate to your main app screen using navigation library
      // navigation.navigate('MainAppScreen');
    }, 2000); // Adjust the timeout as per your need
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.introtext}>FighterPedia</Text>
      <Image source={require('../FighterPedia/FP Stuff/logo.jpg')} style={styles.logo} />
    </View>
  );
};

const App = () => {
  return <SplashScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
  },
  introtext: {
    fontSize: 24,
    marginBottom: 10,
    textDecorationColor: 'white',
    color: 'white',
    fontWeight: 'bold'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain', 
  },
});

export default App;
