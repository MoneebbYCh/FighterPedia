import React, { Component, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import LogoImage from '../FighterPedia/FPstuff/file.png';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function CustomButton ({ title, onPress, buttonStyle, textStyle }) {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
function CustomLongButton ({ title, onPress, buttonStyle, textStyle }) {
    return (
      <TouchableOpacity style={[styles.longbutton, buttonStyle]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
};

function SplashScreen () {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); 
      navigation.navigate('Home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

 

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.introtext}>FighterPedia</Text>
      <Image source={require('../FighterPedia/FPstuff/file.png')} style={styles.logo} />
    </View>
  );
};

const data = [
  { id: '1',  source: require('../FighterPedia/FPstuff/MesserschmittBf109/im1.png'), title: 'Messerschmitt Bf 109' },
  { id: '2',  source: require('../FighterPedia/FPstuff/MesserschmittBf109/im2.png') , title: 'Messerschmitt Bf 109' },
  { id: '3',  source: require('../FighterPedia/FPstuff/MesserschmittBf109/im3.png'), title: 'Messerschmitt Bf 109'  },
  { id: '4',  source: require('../FighterPedia/FPstuff/MesserschmittBf109/im4.png'), title: 'Messerschmitt Bf 109'  },
  { id: '5',  source: require('../FighterPedia/FPstuff/MesserschmittBf109/im5.png'), title: 'Messerschmitt Bf 109'  },
  { id: '6',  source: require('../FighterPedia/FPstuff/MesserschmittBf109/im6.png'), title: 'Messerschmitt Bf 109'  },
  { id: '7',  source: require('../FighterPedia/FPstuff/MesserschmittBf110/im1.png'), title: 'Messerschmitt Bf 110'  },
  { id: '8',  source: require('../FighterPedia/FPstuff/MesserschmittBf110/im2.png'), title: 'Messerschmitt Bf 110'  },
  { id: '9',  source: require('../FighterPedia/FPstuff/MesserschmittBf110/im3.png'), title: 'Messerschmitt Bf 110'  },
  { id: '10',  source: require('../FighterPedia/FPstuff/MesserschmittBf110/im4.png'), title: 'Messerschmitt Bf 110'  },
  
  
];

function FighterCollection (){
  const navigation = useNavigation();
  const [selectedTitle, setSelectedTitle] = useState('');
  const handleImagePress = (title:string) => {
    setSelectedTitle(title);
    if (title === 'Messerschmitt Bf 109') {
      navigation.navigate('PlaneDetailBF109');
    } else {
      navigation.navigate('PlaneDetailBF110');
    }
  };
  return(
    <View style = {styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollcontainer}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.imageContainer}
          onPress={() => handleImagePress(item.title)}
        >
          <Image source={item.source} style={styles.image} />
          <Text style={styles.imageTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  )
}

function PlaneDetailBF109 (){
  return(
    <View style = {styles.screen}>

    </View>
  )
}
function PlaneDetailBF110 (){
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

function Glossary (){
  return(
    <View style = {styles.screen}>
     <Image source={require('../FighterPedia/FPstuff/MesserschmittBf109/im1.png')} style={styles.image}/>
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
            onPress={() => navigation.navigate('Fighter Collection')}
            buttonStyle={{ backgroundColor: 'darkgray', borderColor: 'gray', borderWidth: 2, marginHorizontal: 10 }}
            textStyle={{ color: 'white' }} />
          <CustomButton
            title='Eras'
            onPress={() => navigation.navigate('Eras')}
            buttonStyle={{ backgroundColor: 'darkgray', borderColor: 'gray', borderWidth: 2, marginHorizontal: 10 }}
            textStyle={{ color: 'white' }} />

        </View>

          <View style={styles.longbuttonContainer}>

            <CustomLongButton
              title='Compare Fighters'
              onPress={() => { } }
              buttonStyle={{ backgroundColor: 'darkgray', borderColor: 'gray', borderWidth: 2 }}
              textStyle={{ color: 'white' }} />

            <CustomLongButton
              title='Wallpapers'
              onPress={() => { } }
              buttonStyle={{ backgroundColor: 'darkgray', borderColor: 'gray', borderWidth: 2 }}
              textStyle={{ color: 'white' }} />

            <CustomLongButton
              title='Glossary'
              onPress={() => navigation.navigate('Glossary') }
              buttonStyle={{ backgroundColor: 'darkgray', borderColor: 'gray', borderWidth: 2 }}
              textStyle={{ color: 'white' }} />

            <CustomLongButton
              title='Guess the Plane'
              onPress={() => { } }
              buttonStyle={{ backgroundColor: 'darkgray', borderColor: 'gray', borderWidth: 2 }}
              textStyle={{ color: 'white' }} />

              <CustomLongButton
              title='Credits'
              onPress={() => { } }
              buttonStyle={{ backgroundColor: 'darkgray', borderColor: 'gray', borderWidth: 2 }}
              textStyle={{ color: 'white' }} />


          </View>
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
    marginTop: 100,
  },
  longbuttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  longbutton: {
    height: 60,
    width:300,
    alignSelf: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    flex:1,
    margin: 20,
    resizeMode: "contain",
    borderRadius: 5,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
    
  },
  imageTitle: {
    color: 'white',
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollcontainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default App;
