import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
import styles from '../styles';
import CustomLongButton from '../components/CustomLongButton';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../store/userActions';
import { logoutAction } from '../store/userActions';

function SignScreen() {
    const isSignedIn = useSelector(state => state.userData.isSignedIn);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    
    const handleLogin = () => {
      dispatch(loginAction());
      navigation.navigate('Home');
    };
    const handleLogout = () => {
      dispatch(logoutAction());
    };
  
    return (
      <ImageBackground source={require('../FPstuff/Background.jpg')} style={styles.background}>
        <View style={styles.overlay}>
  
        <View style={styles.cont}>
        <Text style = {styles.heading}>Signed in status: {isSignedIn ? 'yes' : 'no'}</Text>
  
        {isSignedIn ? (
          <View>
          <Text style = {styles.heading} >Welcome! You are signed in.</Text>
          <CustomLongButton title="Go to Home" onPress={()=> navigation.navigate('Home')} buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                textStyle={{ color: 'white' }} />
          <CustomLongButton title="Logout" onPress={handleLogout} buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                textStyle={{ color: 'white' }} />
          </View>
        ) : (
          <View>
            <Text style = {styles.heading}>Please Sign In</Text>
          <CustomLongButton title="Log in" onPress={handleLogin} buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                textStyle={{ color: 'white' }} />
          </View>
        )} 
  
      </View>
      </View>
      </ImageBackground>
    );
  };

  export default SignScreen;
  