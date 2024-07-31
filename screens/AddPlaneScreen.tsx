import React, { useState } from 'react';
import { View, Text, TextInput, Image, ImageBackground } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { saveData } from '../storage/storage';
import CustomLongButton from '../components/CustomLongButton';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import { generateUniqueId } from '../type/idGenerator'; 

const AddPlane: React.FC = () => {
  const [generalInfoText, setGeneralInfoText] = useState<string>('');
  const [generalCharText, setGeneralCharText] = useState<string>('');
  const [performanceText, setPerformanceText] = useState<string>('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const navigation = useNavigation();

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
    const data = { 
      id : generateUniqueId,
      generalInfo: generalInfoText, 
      generalChar: generalCharText, 
      performance: performanceText, 
      image 
    };
    await saveData('userInput', data);
    setSaveSuccess(true);
    setTimeout(() => {
        setSaveSuccess(false);
        navigation.navigate('FighterCollection');
      }, 1000);
  };

  return (
    <ImageBackground source={require('../FPstuff/Bf109Details.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.inputcontainer}>
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