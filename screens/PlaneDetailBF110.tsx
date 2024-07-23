import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
import styles from '../styles';
import Drawer from '../components/Drawer';



function PlaneDetailBF110 (){
    return(
      <ImageBackground source={require('../FPstuff/Bf109Details.jpg')} style={styles.background}>
          <View style={styles.overlay}>
  
          <View style={styles.DetailImageContainer}>
          <Image source={require('../FPstuff/MesserschmittBf110/im4.png')} style={styles.DetailImage}/>
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
                  <Image source={require('../FPstuff/Italy.jpg')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/Romania.jpg')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/SovietUnion.jpg')} style={styles.image} />
                  </View>
                  <View style={styles.circle}>
                  <Image source={require('../FPstuff/Croatia.jpg')} style={styles.image} />
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
  };
  
  export default PlaneDetailBF110;