import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
import styles from '../styles';
import CustomLongButton from '../components/CustomLongButton';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Eras (){
    const navigation = useNavigation();
    return(
      
        <ImageBackground source={require('../FPstuff/Erasbackground.jpg')} style={styles.background}>
          <View style={styles.overlay}>
  
            <View style={styles.ErasuttonContainer}>
  
              <CustomLongButton
                title='1937 -1965'
                onPress={() => navigation.navigate('BF109Collection') }
                buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                textStyle={{ color: 'white' }} />
              
  
              <CustomLongButton
                title='1936 -1945'
                onPress={() => navigation.navigate('BF110Collection') }
                buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                textStyle={{ color: 'white' }} />
  
  
            </View>
  
  
          </View>
        </ImageBackground>
      
    )
  };

  export default Eras;