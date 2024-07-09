import React, { Component, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity} from 'react-native';
import LogoImage from '../FighterPedia/FPstuff/file.png';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CustomButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
function SplashScreen () {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide splash screen after 2000ms
      navigation.navigate('Home');
    }, 2000);

    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [navigation]);

 

  if (!isVisible) {
    return null; // Render nothing if isVisible is false
  }

  return (
    <View style={styles.container}>
      <Text style={styles.introtext}>FighterPedia</Text>
      <Image source={require('../FighterPedia/FPstuff/file.png')} style={styles.logo} />
    </View>
  );
};

function FighterCollection (){
  return(
    <View style = {styles.screen}>

    </View>
  )
}

function Eras (){
  return(
    <View style = {styles.screen}>

    </View>
  )
}

function HomeScreen () {
  const navigation = useNavigation();
    return (
      <View style={styles.screen}>
        <View style={styles.buttonContainer}>
      <CustomButton
      title='Name'
      onPress={ () => navigation.navigate('Fighter Collection')}
      buttonStyle={{ backgroundColor: 'darkgray', borderColor: 'gray', borderWidth: 2, marginHorizontal: 10 }}
      textStyle={{ color: 'white' }}
      />

      <CustomButton
      title='Eras'
      onPress={ () => navigation.navigate('Eras')}
      buttonStyle={{ backgroundColor: 'darkgray', borderColor: 'gray', borderWidth: 2, marginHorizontal: 10 }}
      textStyle={{ color: 'white' }}
      />
      </View>
      <Button
      title='Compare Fighters'
      />
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>

        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
        
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          headerTitle: 'FighterPedia',
          headerBackVisible: false,
          headerStyle: styles.header, 
            headerTitleStyle: styles.headerTitle, 
          }} />
          
          <Stack.Screen name="Fighter Collection" component={FighterCollection}
          options={{
            headerTitle: 'Figther Collection',
            headerStyle: styles.header, 
              headerTitleStyle: styles.headerTitle, 
            }}/>

            <Stack.Screen name="Eras" component={Eras}
            options={{
            headerTitle: 'Eras',
            headerStyle: styles.header, 
              headerTitleStyle: styles.headerTitle, 
            }}/>

      </Stack.Navigator>
  </NavigationContainer>
  
  )
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
    width: 200,
    height: 200,
    resizeMode: 'contain', 
  },
  screen: {
    backgroundColor : 'dimgrey',
    flex: 1,
  },
  header: {
    backgroundColor: 'black',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    padding: 15,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer:{
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default App;
