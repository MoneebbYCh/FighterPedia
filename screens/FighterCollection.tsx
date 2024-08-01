import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
import styles from '../styles';
import { getDataById,getAllData } from '../storage/storage'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation, useFocusEffect } from '@react-navigation/native';
import {Plane} from '../type/types';

const data = [
    { id: '1',  source: require('../../FighterPedia/FPstuff/MesserschmittBf109/im1.png'), title: 'Messerschmitt Bf 109' },
    { id: '2',  source: require('../../FighterPedia/FPstuff/MesserschmittBf109/im2.png') , title: 'Messerschmitt Bf 109' },
    { id: '3',  source: require('../../FighterPedia/FPstuff/MesserschmittBf109/im3.png'), title: 'Messerschmitt Bf 109'  },
    { id: '4',  source: require('../../FighterPedia/FPstuff/MesserschmittBf109/im4.png'), title: 'Messerschmitt Bf 109'  },
    { id: '5',  source: require('../../FighterPedia/FPstuff/MesserschmittBf109/im5.png'), title: 'Messerschmitt Bf 109'  },
    { id: '6',  source: require('../../FighterPedia/FPstuff/MesserschmittBf109/im6.png'), title: 'Messerschmitt Bf 109'  },
    { id: '7',  source: require('../../FighterPedia/FPstuff/MesserschmittBf110/im1.png'), title: 'Messerschmitt Bf 110'  },
    { id: '8',  source: require('../../FighterPedia/FPstuff/MesserschmittBf110/im2.png'), title: 'Messerschmitt Bf 110'  },
    { id: '9',  source: require('../../FighterPedia/FPstuff/MesserschmittBf110/im3.png'), title: 'Messerschmitt Bf 110'  },
    { id: '10',  source: require('../../FighterPedia/FPstuff/MesserschmittBf110/im4.png'), title: 'Messerschmitt Bf 110'  },
  ];

const FighterCollection: React.FC = () => {
  const [planes, setPlanes] = useState<Plane[]>([]);
    const navigation = useNavigation<any>();
    const [selectedTitle, setSelectedTitle] = useState<string>('');

    const fetchPlanes = async () => {
      try {
        const savedPlanes = await getAllData();
        setPlanes(savedPlanes);
      } catch (error) {
        console.error('Error fetching planes:', error);
      }
    };
  
    useEffect(() => {
      fetchPlanes();
    }, []);
  
    useFocusEffect(
      React.useCallback(() => {
        fetchPlanes();
      }, [])
    );
  

  
    const handleImagePress = (id: string) => {
      const selectedPlane = planes.find(plane => plane.id === id);
      if (selectedPlane) {
        navigation.navigate('NewPlaneDetail', { 
          planeId: selectedPlane.id
        });
      }
    };

    const handleImagePressdefault = (title:string) => {
      setSelectedTitle(title);
      if (title === 'Messerschmitt Bf 109') {
        navigation.navigate('PlaneDetailBF109');
      } else {
        navigation.navigate('PlaneDetailBF110');
      }
    };
    return(
      <ImageBackground source={require('../FPstuff/FighterCollectionBackground.jpg')} style={styles.background}>
          <View style={styles.overlay}>
      
        <ScrollView contentContainerStyle={styles.scrollcontainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.imageContainer}
            onPress={() => handleImagePressdefault(item.title) }
          >
            <Image source={item.source} style={styles.image} />
            <Text style={styles.imageTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
        {planes.map((Plane) => (
            <TouchableOpacity
              key={Plane.id}
              style={styles.imageContainer}
              onPress={() => handleImagePress(Plane.id)}
            >
              <Image source={{ uri: Plane.image }} style={styles.newScrollImage} />
              <Text style={styles.imageTitle}>{Plane.title}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
      </View>
        </ImageBackground>
    )
  };

  export default FighterCollection;