import React, { useEffect, useLayoutEffect,useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button, Alert,ImageBackground } from 'react-native';
import { RouteProp, useRoute, useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList, Plane, Operator } from '../type/types'; 
import { deleteDataById, getDataById } from '../storage/storage';
import styles from '../styles';
import Drawer2 from '../components/Drawer2';


const operators: Operator[] = [
  { id: 'germany', name: 'Germany', image: require('../FPstuff/germany.png') },
  { id: 'bulgaria', name: 'Bulgaria', image: require('../FPstuff/Bulgaria.jpg') },
  { id: 'croatia', name: 'Croatia', image: require('../FPstuff/Croatia.jpg') },
  { id: 'finland', name: 'Finland', image: require('../FPstuff/Finland.jpg') },
  { id: 'hungary', name: 'Hungary', image: require('../FPstuff/Hungary.jpg') },
  { id: 'italianSR', name: 'ItalianSR', image: require('../FPstuff/ItalianSR.png') },
  { id: 'italy', name: 'Italy', image: require('../FPstuff/Italy.jpg') },
  { id: 'romania', name: 'Romania', image: require('../FPstuff/Romania.jpg') },
  { id: 'sovietUnion', name: 'SovietUnion', image: require('../FPstuff/SovietUnion.jpg') },
  { id: 'spanishstate', name: 'SpanishState', image: require('../FPstuff/SpanishState.jpg') },
  { id: 'switzerland', name: 'Switzerland', image: require('../FPstuff/Switzerland.jpg') },
  { id: 'yugoslavia', name: 'Yugoslavia', image: require('../FPstuff/yugoslavia.jpg') },
];

type PlaneDetailRouteProp = RouteProp<RootStackParamList, 'NewPlaneDetail'>;

const NewPlaneDetail: React.FC = () => {
  const route = useRoute<PlaneDetailRouteProp>();
  const { planeId } = route.params;
  const [plane, setPlane] = useState<Plane | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchPlaneData = async () => {
      try {
        const planeData = await getDataById(planeId); 
        setPlane(planeData);
      } catch (error) {
        console.error('Error fetching plane data:', error);
      }
    };

    fetchPlaneData();
  }, [planeId]);

  useLayoutEffect(() => {
    
    navigation.setOptions({
      title: plane?.title,
      headerRight: () => (
        <View style={styles.headerButtons}>
          <Button
            title="Edit"
            onPress={() => {
              if (plane) {
                navigation.navigate('AddPlane', { plane });
              } else {
                console.warn('No plane data available to edit.');
              }
            }}
            color="white"
          />
          <Button
            title="Delete"
            onPress={() => plane && handleDelete(plane.id)}
            color="white"
          />
        </View>
      ),
    
    });
  
  }, [plane, navigation]);

  const handleDelete = async (id: string) => {
    Alert.alert(
      "Delete Plane",
      "Are you sure you want to delete this plane?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              await deleteDataById(id);
              navigation.navigate('FighterCollection');
            } catch (error) {
              console.error('Error deleting plane:', error);
              Alert.alert("Error", "Failed to delete plane. Please try again.");
            }
        
          }
        }
      ]
    );
  };

  const extractYear = (dateString: string) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (

    <ImageBackground source={require('../FPstuff/Bf109Details.jpg')} style={styles.background}>
          <View style={styles.overlay}>
          <View style={styles.DetailImageContainer}>
            </View>
      {plane ? (
        <>
        <ScrollView>
      <Image source={{ uri: plane.image }} style={styles.DetailImage} />
      
      <Text style={styles.DetailHeading}>Year</Text>
      <Text style={styles.YearText}>{extractYear(plane.startYear)}    -     {extractYear(plane.endYear)}</Text>


      <View style={styles.HorizontalDetailContainer}>
                <Text style={styles.DetailHeading}>Operators</Text>
                <ScrollView horizontal={true} contentContainerStyle={styles.scrollcontainer}>
                  {plane.operators.map((operatorId) => {
                    const operator = operators.find((op: Operator) => op.id === operatorId);
                    return operator ? (
                      <View key={operator.id} style={styles.circle}>
                        <Image source={operator.image} style={styles.image} />
                      </View>
                    ) : null;
                  })}
                </ScrollView>
              </View>

      

      <Drawer2 title="General Information">
      <Text style={styles.drawerText}>{plane.generalInfo}</Text>
      </Drawer2>
      <Drawer2 title="General Characteristics">
      <Text style={styles.drawerText}>{plane.generalChar}</Text>
      </Drawer2>
      <Drawer2 title="Performance">
      <Text style={styles.drawerText}>{plane.performance}</Text>
      </Drawer2>
      </ScrollView>
      </>
      ): (
        <Text>no plane data available</Text>
      )}
    </View>
    
      </ImageBackground>
  );
};



export default NewPlaneDetail;
