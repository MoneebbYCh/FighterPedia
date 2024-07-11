import React, { Component, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
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
    <ImageBackground source={require('./FPstuff/FighterCollectionBackground.jpg')} style={styles.background}>
        <View style={styles.overlay}>
    
      <ScrollView contentContainerStyle={styles.scrollcontainer}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.imageContainer}
          onPress={() => handleImagePress(item.title) }
        >
          <Image source={item.source} style={styles.image} />
          <Text style={styles.imageTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
      </ImageBackground>
  )
}



function PlaneDetailBF109() {
  return(
    <ImageBackground source={require('./FPstuff/Bf109Details.jpg')} style={styles.background}>
        <View style={styles.overlay}>

        <View style={styles.DetailImageContainer}>
        <Image source={require('./FPstuff/MesserschmittBf109/im6.png')} style={styles.DetailImage}/>
        </View>

        <View style={styles.HorizontalDetailContainer}>
        <Text style = {styles.DetailHeading}> Operators </Text>

        </View>

      </View>
    </ImageBackground>
  )
}
function PlaneDetailBF110 (){
  return(
    <ImageBackground source={require('./FPstuff/Bf109Details.jpg')} style={styles.background}>
        <View style={styles.overlay}>

        <View style={styles.DetailImageContainer}>
        <Image source={require('./FPstuff/MesserschmittBf110/im4.png')} style={styles.DetailImage}/>
        </View>

        <View style={styles.HorizontalDetailContainer}>
        <Text style = {styles.DetailHeading}> Operators </Text>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/germany.png')} style={styles.image} />
                </View>
        </View>

      </View>
    </ImageBackground>
  )
}

function Eras (){
  const navigation = useNavigation();
  return(
    
      <ImageBackground source={require('./FPstuff/Erasbackground.jpg')} style={styles.background}>
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
}
const data2 = [
  { id: '1',  source: require('../FighterPedia/FPstuff/MesserschmittBf109/im1.png'), title: 'Messerschmitt Bf 109' },
  { id: '2',  source: require('../FighterPedia/FPstuff/MesserschmittBf109/im2.png') , title: 'Messerschmitt Bf 109' },
  { id: '3',  source: require('../FighterPedia/FPstuff/MesserschmittBf109/im3.png'), title: 'Messerschmitt Bf 109'  },
  { id: '4',  source: require('../FighterPedia/FPstuff/MesserschmittBf109/im4.png'), title: 'Messerschmitt Bf 109'  },
  { id: '5',  source: require('../FighterPedia/FPstuff/MesserschmittBf109/im5.png'), title: 'Messerschmitt Bf 109'  },
  { id: '6',  source: require('../FighterPedia/FPstuff/MesserschmittBf109/im6.png'), title: 'Messerschmitt Bf 109'  },  
  ];

function BF109Collection (){
  const navigation = useNavigation();
  return(
    
     <ImageBackground source={require('./FPstuff/ErasCollection.jpg')} style={styles.background}>
     <View style={styles.overlay}>

     <ScrollView contentContainerStyle={styles.scrollcontainer}>
      {data2.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.imageContainer}
          onPress={() => navigation.navigate('PlaneDetailBF109')}
        >
          <Image source={item.source} style={styles.image} />
          <Text style={styles.imageTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

     </View>
     </ImageBackground>
    
  )
}
const data3 = [
  
  { id: '7',  source: require('../FighterPedia/FPstuff/MesserschmittBf110/im1.png'), title: 'Messerschmitt Bf 110'  },
  { id: '8',  source: require('../FighterPedia/FPstuff/MesserschmittBf110/im2.png'), title: 'Messerschmitt Bf 110'  },
  { id: '9',  source: require('../FighterPedia/FPstuff/MesserschmittBf110/im3.png'), title: 'Messerschmitt Bf 110'  },
  { id: '10',  source: require('../FighterPedia/FPstuff/MesserschmittBf110/im4.png'), title: 'Messerschmitt Bf 110'  },
  
  
];
function BF110Collection (){
    const navigation = useNavigation();
  return(
    
     <ImageBackground source={require('./FPstuff/ErasCollection.jpg')} style={styles.background}>
     <View style={styles.overlay}>

     <ScrollView contentContainerStyle={styles.scrollcontainer}>
      {data3.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.imageContainer}
          onPress={() => navigation.navigate('PlaneDetailBF110')}
        >
          <Image source={item.source} style={styles.image} />
          <Text style={styles.imageTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

     </View>
     </ImageBackground>
    
  )
}

function Glossary (){
  return(
    <ImageBackground source={require('./FPstuff/GlossaryBackground.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.textcontainer}>
          <ScrollView>
          <Text style={styles.heading}> Avia S-99/S-199</Text>
          <Text style={styles.infotext}>Variants of the Messerschmitt Bf 109 manufactured post-war in Czechoslovakia.</Text>

          <Text style={styles.heading}> Bayerische Flugzeugwerke</Text>
          <Text style={styles.infotext}>Manufacturer of the Messerschmitt Bf 110 and Bf 109 aircraft.</Text>

          <Text style={styles.heading}> Bf 109</Text>
          <Text style={styles.infotext}>A German fighter aircraft used extensively during World War II, notable for its high production numbers and modern features like all-metal monocoque construction, a closed canopy, and retractable landing gear.</Text>

          <Text style={styles.heading}> Bf 110</Text>
          <Text style={styles.infotext}>A German heavy fighter aircraft used in multiple roles including fighter-bomber and night fighter during World War II.</Text>

          <Text style={styles.heading}> Daimler-Benz DB 601B-1</Text>
          <Text style={styles.infotext}>A liquid-cooled inverted V-12 engine used in the Messerschmitt Bf 110.</Text>

          <Text style={styles.heading}> Daimler-Benz DB 605A-1</Text>
          <Text style={styles.infotext}>A liquid-cooled inverted V-12 engine used in the Messerschmitt Bf 109.</Text>

          <Text style={styles.heading}> Eisenseiten</Text>
          <Text style={styles.infotext}>Nickname given by Hermann Göring to the Bf 110, meaning "Ironsides."</Text>

          <Text style={styles.heading}> Focke-Wulf Fw 190</Text>
          <Text style={styles.infotext}>Another German fighter aircraft that began to replace the Bf 109 from 1941.</Text>

          <Text style={styles.heading}> Hermann Göring</Text>
          <Text style={styles.infotext}>A proponent of the Bf 110 who nicknamed it "Ironsides."</Text>

          <Text style={styles.heading}> Hispano Aviacion Ha 1112</Text>
          <Text style={styles.infotext}>A variant of the Messerschmitt Bf 109 manufactured in Spain.</Text>

          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  )
}

function HomeScreen () {
  const navigation = useNavigation();
    return (
      <ImageBackground source={require('./FPstuff/Background.jpg')} style={styles.background}>
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
    fontWeight: 'bold',

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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  ErasuttonContainer: {
    flex: 1,
    marginTop: 250,
    marginBottom: 50,
    alignSelf: 'center',
    
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    textDecorationColor: 'white',
    color: 'white',
    fontWeight: 'bold'
  },
  infotext: {
    fontSize: 14,
    marginBottom: 30,
    textDecorationColor: 'white',
    color: 'white',
  },
  textcontainer: {
    flex: 1,
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  DetailImageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
   
  },
  DetailImage: {
    width:400,
    height: 250,
    resizeMode: "stretch",
    alignItems: 'center',
    borderRadius: 10,
  },
  HorizontalDetailContainer: {
    marginTop: 10,
  },
  DetailHeading:{
    fontSize: 28,
    marginLeft: 10,
    textDecorationColor: 'white',
    color: 'white',
    fontWeight: 'bold',
  },
  circle: {
    width: 50, // Adjust size of the circle
    height: 50, // Adjust size of the circle
    borderRadius: 25, // Half of the width/height for a perfect circle
    backgroundColor: 'lightgray', // Optional background color for the circle
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
});

export default App;
