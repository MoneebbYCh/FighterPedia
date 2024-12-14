import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
import styles from '../styles';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const data3 = [
  
    { id: '7',  source: require('../../FighterPedia/FPstuff/MesserschmittBf110/im1.png'), title: 'Messerschmitt Bf 110'  },
    { id: '8',  source: require('../../FighterPedia/FPstuff/MesserschmittBf110/im2.png'), title: 'Messerschmitt Bf 110'  },
    { id: '9',  source: require('../../FighterPedia/FPstuff/MesserschmittBf110/im3.png'), title: 'Messerschmitt Bf 110'  },
    { id: '10',  source: require('../../FighterPedia/FPstuff/MesserschmittBf110/im4.png'), title: 'Messerschmitt Bf 110'  },
    
    
  ];
  function BF110Collection (){
      const navigation = useNavigation();
    return(
      
       <ImageBackground source={require('../FPstuff/ErasCollection.jpg')} style={styles.background}>
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
  };

  export default BF110Collection;