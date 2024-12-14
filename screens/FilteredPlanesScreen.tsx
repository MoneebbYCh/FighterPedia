import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Image, ScrollView, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { getAllData } from '../storage/storage';
import { Plane, RootStackParamList } from '../type/types';
import styles from '../styles';

type FilteredPlanesRouteProp = RouteProp<RootStackParamList, 'FilteredPlanesScreen'>;

const FilteredPlanesScreen: React.FC = () => {
  const route = useRoute<FilteredPlanesRouteProp>();
  const { startYear, endYear } = route.params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [filteredPlanes, setFilteredPlanes] = useState<Plane[]>([]);

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const savedPlanes = await getAllData();
        const filtered = savedPlanes.filter(
          (plane) =>
            new Date(plane.startYear).getFullYear() >= startYear &&
            new Date(plane.endYear).getFullYear() <= endYear
        );
        setFilteredPlanes(filtered);
      } catch (error) {
        console.error('Error fetching planes:', error);
      }
    };

    fetchPlanes();
  }, [startYear, endYear]);

  useLayoutEffect(() => {
    navigation.setOptions({
        title: `${startYear} - ${endYear}`,
    });
  }, [navigation, startYear, endYear]);

  return (
    <ImageBackground source={require('../FPstuff/Bf109Details.jpg')} style={styles.background}>
          <View style={styles.overlay}>

    <ScrollView contentContainerStyle={styles.  ErasNewScrollContainer}>
      {filteredPlanes.length > 0 ? (
        filteredPlanes.map((plane) => (
            <TouchableOpacity
                key={plane.id}
                style={styles.ErasNewimageContainer}
                onPress={() => navigation.navigate('NewPlaneDetail', { planeId: plane.id })}
              >
                <Image source={{ uri: plane.image }} style={styles.ErasNewimage} />
                <Text style={styles.imageTitle}>{plane.title}</Text>
              </TouchableOpacity>
          
        ))
      ) : (
        <Text style={styles.imageTitle}>No planes found for the selected range.</Text>
      )}
    </ScrollView>
    </View>
    
      </ImageBackground>
  );
};

export default FilteredPlanesScreen;
