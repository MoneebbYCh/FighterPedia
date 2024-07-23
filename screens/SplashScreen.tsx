import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
import styles from '../styles';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function SplashScreen () {
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false); 
        navigation.navigate('LogIn');
      }, 2000);
  
      return () => clearTimeout(timer);
    }, [navigation]);
  
   
  
    if (!isVisible) {
      return null;
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.introtext}>FighterPedia</Text>
        <Image source={require('../../FighterPedia/FPstuff/file.png')} style={styles.logo} />
      </View>
    );
  };

  export default SplashScreen;