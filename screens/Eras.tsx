import React, { useRef, useEffect,useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Button, TouchableOpacity, FlatList, ScrollView, ImageBackground} from 'react-native';
import styles from '../styles';
import { NavigationContainer, NavigationProp, useNavigation } from '@react-navigation/native';
import { getAllData } from '../storage/storage';
import { Plane, RootStackParamList } from '../type/types';
import CustomLongButton from '../components/CustomLongButton';

const Eras: React.FC = ()=> {
  const [planes, setPlanes] = useState<Plane[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchPlanes = async () => {
      const savedPlanes = await getAllData();
      setPlanes(savedPlanes);
    };
    
    fetchPlanes();
  }, []);
    
  const uniqueYearRanges = new Set<string>();
    return(
      
        <ImageBackground source={require('../FPstuff/Erasbackground.jpg')} style={styles.background}>
          <View style={styles.overlay}>


          <ScrollView contentContainerStyle = {styles.ErasuttonContainer}>

        
              <CustomLongButton
                title='1937 - 1965'
                onPress={() => navigation.navigate('BF109Collection') }
                buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                textStyle={{ color: 'white' }} />
              
  
              <CustomLongButton
                title='1936 - 1945'
                onPress={() => navigation.navigate('BF110Collection') }
                buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                textStyle={{ color: 'white' }} />

      {planes.map((plane) => {
            const startYear = new Date(plane.startYear).getFullYear();
            const endYear = new Date(plane.endYear).getFullYear();
            const yearRange = `${startYear} - ${endYear}`;

            if (!uniqueYearRanges.has(yearRange)) {
              uniqueYearRanges.add(yearRange);
              return (
                <CustomLongButton
                  key={yearRange}
                  title={yearRange}
                  onPress={() => {
                    navigation.navigate('FilteredPlanesScreen', {
                      startYear,
                      endYear,
                    });
                  }}
                  buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
                  textStyle={{ color: 'white' }}
                />
              );
            }

            return null;
          })}
          
  
            </ScrollView>
          </View>
        </ImageBackground>
      
    )
  };

  export default Eras;