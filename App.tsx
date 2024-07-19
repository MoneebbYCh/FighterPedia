import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
import LogoImage from '../FighterPedia/FPstuff/file.png';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './store/store'
import { loginAction } from './store/userActions';
import { logoutAction } from './store/userActions';

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

const Drawer = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleDrawer = () => {
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 220], 
  });

  return (
    <View style={styles.drawerContainer}>
      <TouchableOpacity onPress={toggleDrawer} style={styles.drawerButton}>
        <Text style={styles.drawerButtonText}>{title}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.drawerContent, { height: heightInterpolation }]}>
        {children}
      </Animated.View>
    </View>
  );
};

const Drawer2 = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleDrawer = () => {
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 280], // Adjust to desired height
  });

  return (
    <View style={styles.drawerContainer}>
      <TouchableOpacity onPress={toggleDrawer} style={styles.drawerButton}>
        <Text style={styles.drawerButtonText}>{title}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.drawerContent, { height: heightInterpolation }]}>
        {children}
      </Animated.View>
    </View>
  );
};



function PlaneDetailBF109() {
  return(
    <ImageBackground source={require('./FPstuff/Bf109Details.jpg')} style={styles.background}>
        <View style={styles.overlay}>


        <View style={styles.DetailImageContainer}>
        <Image source={require('./FPstuff/MesserschmittBf109/im6.png')} style={styles.DetailImage}/>
        </View>

        <View style={styles.HorizontalDetailContainer}>
        <Text style = {styles.DetailHeading}> Operators </Text>
        <ScrollView horizontal = {true} contentContainerStyle={styles.scrollcontainer}>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/germany.png')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/Hungary.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/Bulgaria.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/Croatia.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/Finland.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/Italy.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/ItalianSR.png')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/Romania.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/SlovakR.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/SpanishState.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/Switzerland.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/yugoslavia.jpg')} style={styles.image} />
                </View>
        </ScrollView>
        </View>

        <Drawer2 title="General Information">
          <Text style={styles.drawerText}>Role: 		Fighter{"\n"}
Manufacturer:	Bayerische Flugzeugwerke and Messerschmitt{"\n"}
Designed by: 	Willy Messerschmitt{"\n"}
First flight: 		28 May 1935{"\n"}
Introduced: 		1937{"\n"}
Retired: 		1945, Luftwaffe and 1965, Spain{"\n"}
Status: 		Retired{"\n"}
Primary users:{"\t"}- Luftwaffe{"\n"}
{"\t"}{"\t"}{"\t"}{"\t"}-Hungarian Air Force{"\n"}
{"\t"}{"\t"}{"\t"}{"\t"}-Italian Social Republic Air Force{"\n"}
{"\t"}{"\t"}{"\t"}{"\t"}-Romanian Air Force{"\n"}
Number built:	more than 33,000{"\n"}
Variants:{"\t"}- Avia S-99/S-199{"\n"}
{"\t"}{"\t"}{"\t"}- Hispano Aviacion{"\n"} 
{"\t"}{"\t"}{"\t"}- Ha 1112 </Text>
        </Drawer2>
        <Drawer2 title="General Characterisistics">
          <Text style={styles.drawerText}>
          * Crew: One{"\n"}
    * Length: 8.95 m (29 ft 7 in){"\n"}
    * Wingspan: 9.925 m (32 ft 6 in){"\n"}
    * Height: 2.60 m (8 ft 2 in){"\n"}
    * Wing area: 16.05 m² (173.3 ft²){"\n"}
    * Empty weight: 2,247 kg (5,893 lb){"\n"}
    * Loaded weight: 3148 kg (6,940 lb){"\n"}
    * Max takeoff weight: 3,400 kg (7,495 lb){"\n"}
    * Powerplant: 1× Daimler-Benz DB 605A-1 liquid-cooled inverted V12, 1,475 PS (1,455 hp, 1,085 kW){"\n"}
          </Text>
        </Drawer2>
        <Drawer2 title="Performance">
          <Text style={styles.drawerText}>
          * Maximum speed: 640 km/h (398 mph) at 6,300m (20,669ft){"\n"}
    * Cruise speed: 590 km/h (365 mph) at 6,000 m (19,680 ft){"\n"}
    * Range: 850 km (528 mi) with droptank 1,000 km (620 mi){"\n"}
    * Service ceiling: 12,000 m (39,370 ft){"\n"}
    * Rate of climb: 17.0 m/s (3,345 ft/min){"\n"}
    * Wing loading: 199.8 kg/m² (40.9 lb/ft²){"\n"}
    * Power/mass: 330 W/kg (0.21 hp/lb){"\n"}
          </Text>
        </Drawer2>

        

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
        <ScrollView horizontal = {true} contentContainerStyle={styles.scrollcontainer}>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/germany.png')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/Hungary.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/Italy.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/Romania.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/SovietUnion.jpg')} style={styles.image} />
                </View>
                <View style={styles.circle}>
                <Image source={require('./FPstuff/Croatia.jpg')} style={styles.image} />
                </View>
        </ScrollView>
        </View>

        <Drawer title="General Information">
          <Text style={styles.drawerText}>Role:			Heavy fighter/Fighter-bomber/Night fighter{"\n"}
                                          Manufacturer: 	Bayerische Flugzeugwerke and Messerschmitt{"\n"}
                                            Designed by: 	Willy Messerschmitt{"\n"}
                                            First flight: 		12 May 1936{"\n"}
                                            Introduced: 		1937{"\n"}
                                            Retired: 		1945 (Luftwaffe){"\n"}
                                            Primary users:{"\t"}- Luftwaffe{"\n"}
                                            {"\t"}{"\t"}{"\t"}{"\t"}- Hungarian Air Force{"\n"}
                                            {"\t"}{"\t"}{"\t"}{"\t"}- Regia Aeronautica{"\n"}
                                            {"\t"}{"\t"}{"\t"}{"\t"}- Romanian Air Force{"\n"}
                                            Number built 	6,170 </Text>
        </Drawer>
        <Drawer title="General Characterisistics">
          <Text style={styles.drawerText}>
          * Crew: 2 (3 for night fighter variants){"\n"}
    * Length: 12.3 m (40 ft 6 in){"\n"}
    * Wingspan: 16.3 m (53 ft 4 in){"\n"}
    * Height: 3.3 m (10 ft 9 in){"\n"}
    * Wing area: 38.8 m² (414 ft²){"\n"}
    * Empty weight: 4,500 kg (9,900 lb){"\n"}
    * Loaded weight: 6,700 kg (14,800 lb){"\n"}
    * Powerplant: 2× Daimler-Benz DB 601B-1 liquid-cooled inverted V-12, 809 kW (1,100 hp) each
          </Text>
        </Drawer>
        <Drawer title="Performance">
          <Text style={styles.drawerText}>
          * Maximum speed: 560 km/h (348 mph){"\n"}
    * Range: 2,410 km combat, 2,800 km ferry (1,500 mi / 1,750 mi){"\n"}
    * Service ceiling: 10,500 m (35,000 ft){"\n"}
    * Wing loading: 173 kg/m² (35.7 lb/ft²){"\n"}
    * Power/mass: 0.3644 kW/kg (0.155 hp/lb){"\n"}
          </Text>
        </Drawer>

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
    <ImageBackground source={require('./FPstuff/Background.jpg')} style={styles.background}>
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
    width: 70, 
    height: 70, 
    borderRadius: 20, 
    backgroundColor: 'lightgray', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight : 20,
  },
  drawerContainer: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'dark-grey',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',

  },
  drawerButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 15,
  },
  drawerButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  drawerContent: {
    overflow: 'hidden',
  },
  drawerText: {
    padding: 15,
    color: 'white',
  },
    cont: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    text: {
      fontSize: 20,
      color: 'black',
      marginBottom: 10,
    },
  });

export default App;
