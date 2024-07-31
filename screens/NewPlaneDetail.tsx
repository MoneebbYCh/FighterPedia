import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList, Plane } from '../type/types'; 


type PlaneDetailRouteProp = RouteProp<RootStackParamList, 'NewPlaneDetail'>;

const NewPlaneDetail: React.FC = () => {
  const route = useRoute<PlaneDetailRouteProp>();
  const plane = route.params?.plane as Plane;

  if (!plane) {
    return <Text>No data available</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: plane.image }} style={styles.image} />
      <Text style={styles.text}>General Information: {plane.generalInfo}</Text>
      <Text style={styles.text}>General Characteristics: {plane.generalChar}</Text>
      <Text style={styles.text}>Performance: {plane.performance}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default NewPlaneDetail;
