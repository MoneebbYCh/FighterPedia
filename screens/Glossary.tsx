import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
import styles from '../styles';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Glossary (){
    return(
      <ImageBackground source={require('../FPstuff/GlossaryBackground.jpg')} style={styles.background}>
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
  };

  export default Glossary;