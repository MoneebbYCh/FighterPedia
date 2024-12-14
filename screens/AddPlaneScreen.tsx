import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ImageBackground, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { saveData } from '../storage/storage';
import CustomLongButton from '../components/CustomLongButton';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import styles from '../styles';
import { generateUniqueId } from '../type/idGenerator'; 
import { RootStackParamList, Plane } from '../type/types';
import MonthYearPicker from 'react-native-month-year-picker';



type AddPlaneRouteProp = RouteProp<RootStackParamList, 'AddPlane'>;

const operators = [
  { id: 'germany', name: 'Germany', image: require('../FPstuff/germany.png') },
  {id: 'bulgaria', name: 'Bulgaria', image: require('../FPstuff/Bulgaria.jpg')},
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
  const [selectedOperators, setSelectedOperators] = useState<string[]>([]);
  const [startYear, setStartYear] = useState<Date | undefined>(undefined);
const [endYear, setEndYear] = useState<Date | undefined>(undefined);
const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);




  useEffect(() => {
    if (plane) {
      setNameText(plane.title);
      setGeneralInfoText(plane.generalInfo);
      setGeneralCharText(plane.generalChar);
      setPerformanceText(plane.performance);
      setSelectedOperators(plane.operators || []);
      setImage(plane.image);
      setStartYear(plane.startYear ? new Date(plane.startYear) : undefined);
      setEndYear(plane.endYear ? new Date(plane.endYear) : undefined);
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

  const toggleOperatorSelection = (operatorId: string) => {
    setSelectedOperators((prevSelectedOperators) => 
      prevSelectedOperators.includes(operatorId)
        ? prevSelectedOperators.filter(id => id !== operatorId)
        : [...prevSelectedOperators, operatorId]
    );
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
      image: image || '',
      operators: selectedOperators,
      startYear: startYear ? startYear.toISOString().split('T')[0] : '', 
    endYear: endYear ? endYear.toISOString().split('T')[0] : '',
    };
  
    try {
      await saveData(newId, data);
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        navigation.navigate('FighterCollection');
      }, 1000);
    } catch (error) {
      console.error('Error saving plane:', error);
      Alert.alert("Error", "Failed to save plane. Please try again.");
    }
  };

  const handleStartDateChange = (event: any, date: Date | undefined) => {
    setShowStartPicker(false);
    if (date) {
      setStartYear(date);
    }
  };

  const handleEndDateChange = (event: any, date: Date | undefined) => {
    setShowEndPicker(false);
    if (date) {
      setEndYear(date);
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



          <View style={styles.datePickerContainer}>
                <CustomLongButton
                  title={startYear ? `${startYear.getMonth() + 1}/${startYear.getFullYear()}` : 'Select Start Year'}
                  onPress={() => setShowStartPicker(true)}
                  buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2, width: 150 }}
                  textStyle={styles.datePickerText}
                />

                <CustomLongButton
                  title={endYear ? `${endYear.getMonth() + 1}/${endYear.getFullYear()}` : 'Select End Year'}
                  onPress={() => setShowEndPicker(true)}
                  buttonStyle= {{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'gray', borderWidth: 2, width: 150 }}
                  textStyle={styles.datePickerText}
                />

                {showStartPicker && (
                  <MonthYearPicker
                    onChange={handleStartDateChange}
                    value={startYear || new Date()}
                    mode='short'
                  />
                )}
                {showEndPicker && (
                  <MonthYearPicker
                    onChange={handleEndDateChange}
                    value={endYear || new Date()}
                    mode='short'
                  />
                )}
              </View>

          <View style={styles.HorizontalDetailContainer}>
            <Text style={styles.addoperatorheading}>Select Operators</Text>
            <ScrollView horizontal={true} contentContainerStyle={styles.scrollcontainer2}>
              {operators.map((operator) => (
                <TouchableOpacity
                  key={operator.id}
                  style={[
                    styles.circle2,
                    selectedOperators.includes(operator.id) && styles.selectedCircle2
                  ]}
                  onPress={() => toggleOperatorSelection(operator.id)}
                >
                  <Image source={operator.image} style={styles.image2} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

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
