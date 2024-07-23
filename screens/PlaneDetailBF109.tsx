import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
import styles from '../styles';
import Drawer2 from '../components/Drawer2';

function PlaneDetailBF109() {
    return(
      <ImageBackground source={require('../FPstuff/Bf109Details.jpg')} style={styles.background}>
          <View style={styles.overlay}>
  
  
          <View style={styles.DetailImageContainer}>
          <Image source={require('../FPstuff/MesserschmittBf109/im6.png')} style={styles.DetailImage}/>
          </View>
  
          <View style={styles.HorizontalDetailContainer}>
          <Text style = {styles.DetailHeading}> Operators </Text>
          <ScrollView horizontal = {true} contentContainerStyle={styles.scrollcontainer}>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/germany.png')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/Hungary.jpg')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/Bulgaria.jpg')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/Croatia.jpg')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/Finland.jpg')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/Italy.jpg')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/ItalianSR.png')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/Romania.jpg')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/SlovakR.jpg')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/SpanishState.jpg')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/Switzerland.jpg')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/yugoslavia.jpg')} style={styles.image} />
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
  };

  export default PlaneDetailBF109;