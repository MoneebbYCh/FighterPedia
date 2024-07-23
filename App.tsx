import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
import LogoImage from '../FighterPedia/FPstuff/file.png';
import styles from './styles';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './store/store'
import { loginAction } from './store/userActions';
import { logoutAction } from './store/userActions';
import SplashScreen from './screens/SplashScreen';
import SignScreen from './screens/SignScreen';
import HomeScreen from './screens/HomeScreen';
import FighterCollection from './screens/FighterCollection';
import Eras from './screens/Eras';
import Glossary from './screens/Glossary';
import PlaneDetailBF109 from './screens/PlaneDetailBF109';
import PlaneDetailBF110 from './screens/PlaneDetailBF110';
import BF109Collection from './screens/BF109Collection';
import BF110Collection from './screens/BF110Collection';
  
  const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store = {store}>
  <NavigationContainer>
    <Stack.Navigator>

        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
        
        <Stack.Screen name ="LogIn" component={SignScreen}
        options={{
          headerTitle: 'Log In',
          headerBackVisible: false,
          headerStyle: styles.header, 
            headerTitleStyle: styles.headerTitle, 
          }}
        />

        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          headerTitle: 'FighterPedia',
          headerTintColor: 'white',
          headerStyle: styles.header, 
            headerTitleStyle: styles.headerTitle, 
          }} />
          
          <Stack.Screen name="Fighter Collection" component={FighterCollection}
          options={{
            headerTitle: 'Figther Collection',
            headerStyle: styles.header, 
            headerTintColor: 'white',
              
            }}/>

            <Stack.Screen name="Eras" component={Eras}
            options={{
            headerTitle: 'Eras',
            headerStyle: styles.header, 
            headerTitleStyle: styles.headerTitle,
            headerTintColor: 'white',
            }}/>

            <Stack.Screen name="Glossary" component={Glossary}
            options={{
            headerTitle: 'Glossary',
            headerStyle: styles.header, 
              headerTitleStyle: styles.headerTitle,
              headerTintColor: 'white', 
            }}/>
            
            <Stack.Screen name="PlaneDetailBF109" component={PlaneDetailBF109}
            options={{
            headerTitle: 'Messerschmitt Bf 109',
            headerStyle: styles.header, 
              headerTitleStyle: styles.headerTitle,
              headerTintColor: 'white', 
            }}/>

            <Stack.Screen name="PlaneDetailBF110" component={PlaneDetailBF110}
            options={{
            headerTitle: 'Messerschmitt Bf 110',
            headerStyle: styles.header, 
              headerTitleStyle: styles.headerTitle,
              headerTintColor: 'white', 
            }}/>

            <Stack.Screen name="BF109Collection" component={BF109Collection}
            options={{
            headerTitle: 'Messerschmitt Bf 109',
            headerStyle: styles.header, 
              headerTitleStyle: styles.headerTitle,
              headerTintColor: 'white', 
            }}/>

            <Stack.Screen name="BF110Collection" component={BF110Collection}
            options={{
            headerTitle: 'Messerschmitt Bf 110',
            headerStyle: styles.header, 
              headerTitleStyle: styles.headerTitle,
              headerTintColor: 'white', 
            }}/>

      </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )
};



export default App;
