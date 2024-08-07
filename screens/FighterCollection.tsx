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
  type CombinedDataItem = {
    id: string;
    source: any; 
    title: string;
    isDynamic?: boolean; 
  };

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
    

    const combinedData: CombinedDataItem[] = [...data,...planes.map(plane => ({
        id: plane.id,
        source: { uri: plane.image },
        title: plane.title,
        isDynamic: true, 
      })),
    ];


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
        <FlatList
          data={combinedData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.imageContainer}
                onPress={() => item.isDynamic ? handleImagePress(item.id) : handleImagePressdefault(item.title)}
              >
                <Image
                source={item.source}
                style={item.isDynamic ? styles.newScrollImage : styles.image} 
              />
                <Text style={styles.imageTitle}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};
    
 
  export default FighterCollection;