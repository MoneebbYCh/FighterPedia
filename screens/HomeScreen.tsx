import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
import styles from '../styles';
import CustomButton from '../components/CustomButtons';
import CustomLongButton from '../components/CustomLongButton';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen () {
    const navigation = useNavigation();
      return (
        <ImageBackground source={require('../FPstuff/Background.jpg')} style={styles.background}>
        <View style={styles.overlay}>
  
          <View style={styles.buttonContainer}>
            <CustomButton
              title='Name'
              onPress={() => navigation.navigate('Fighter Collection')}
              buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2, marginHorizontal: 10 }}
              textStyle={{ color: 'white' }} />
            <CustomButton
              title='Eras'
              onPress={() => navigation.navigate('Eras')}
              buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2, marginHorizontal: 10 }}
              textStyle={{ color: 'white' }} />
          </View>
  
            <View style={styles.longbuttonContainer}>
  
              <CustomLongButton
                title='Compare Fighters'
                onPress={() => { } }
                buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                textStyle={{ color: 'white' }} />
  
              <CustomLongButton
                title='Wallpapers'
                onPress={() => { } }
                buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                textStyle={{ color: 'white' }} />
  
              <CustomLongButton
                title='Glossary'
                onPress={() => navigation.navigate('Glossary') }
                buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                textStyle={{ color: 'white' }} />
  
              <CustomLongButton
                title='Guess the Plane'
                onPress={() => { } }
                buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                textStyle={{ color: 'white' }} />
  
                <CustomLongButton
                title='Credits'
                onPress={() => { } }
                buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                textStyle={{ color: 'white' }} />
  
            </View>
          </View>
      </ImageBackground>
      );
    };

    export default HomeScreen;