import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ImageBackground, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { saveData } from '../storage/storage';
import CustomLongButton from '../components/CustomLongButton';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import styles from '../styles';
import { generateUniqueId } from '../type/idGenerator'; 
import { RootStackParamList, Plane } from '../type/types';

type AddPlaneRouteProp = RouteProp<RootStackParamList, 'AddPlane'>;

const AddPlane: React.FC = () => {
  const route = useRoute<AddPlaneRouteProp>();
  const navigation = useNavigation();
  const plane = route.params?.plane;

  const [nameText, setNameText] = useState<string>('');
  const [generalInfoText, setGeneralInfoText] = useState<string>('');
  const [generalCharText, setGeneralCharText] = useState<string>('');
  const [performanceText, setPerformanceText] = useState<string>('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (plane) {
      setNameText(plane.title);
      setGeneralInfoText(plane.generalInfo);
      setGeneralCharText(plane.generalChar);
      setPerformanceText(plane.performance);
      setImage(plane.image);
    }
  }, [plane]);

  const selectImage = async () => {
    try {
      const result = await launchImageLibrary({ mediaType: 'photo' });
      if (result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri || null);
      }
    } catch (error) {
      console.error('ImagePicker Error: ', error);
    }
  };

  const handleSubmit = async () => {
    const newId = plane ? plane.id : generateUniqueId();
    if (typeof newId !== 'string' || newId.trim() === '') {
      console.error('Invalid id generated:', newId);
      Alert.alert("Error", "Unable to save plane due to invalid ID.");
      return;
    }
  
    const data: Plane = { 
      id: newId,
      title: nameText,
      generalInfo: generalInfoText, 
      generalChar: generalCharText, 
      performance: performanceText, 
      image: image || ''
    };
  
    try {
      await saveData(newId, data);
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        navigation.navigate('Home');
      }, 1000);
    } catch (error) {
      console.error('Error saving plane:', error);
      Alert.alert("Error", "Failed to save plane. Please try again.");
    }
  };

  return (
    <ImageBackground source={require('../FPstuff/Bf109Details.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            placeholderTextColor={'white'}
            value={nameText}
            onChangeText={setNameText}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter General Information"
            placeholderTextColor={'white'}
            value={generalInfoText}
            onChangeText={setGeneralInfoText}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter General Characteristics"
            placeholderTextColor={'white'}
            value={generalCharText}
            onChangeText={setGeneralCharText}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Performance"
            placeholderTextColor={'white'}
            value={performanceText}
            onChangeText={setPerformanceText}
          />
          <CustomLongButton
            title="Select Image"
            onPress={selectImage}
            buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
            textStyle={{ color: 'white' }}
          />
          {image && <Image source={{ uri: image }} style={styles.image} />}

          <CustomLongButton 
            title="Save" 
            onPress={handleSubmit} 
            buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2 }}
            textStyle={{ color: 'white' }}
          />
          {saveSuccess && (
            <Text style={styles.SuccessMssgtext}>Save was successful!</Text>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default AddPlane;
