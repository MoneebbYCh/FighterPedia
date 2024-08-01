import AsyncStorage from '@react-native-async-storage/async-storage';
import { Plane } from '../type/types';
const key: string = 'yourKey'; 


export const saveData = async (id: string, data: Plane) => {
  try {
    await AsyncStorage.setItem(id, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
};

export const getDataById = async (id: string): Promise<Plane> => {
  try {
    const value = await AsyncStorage.getItem(id);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      throw new Error('No data found for the given ID');
    }
  } catch (error) {
    console.error('Error retrieving data by ID:', error);
    throw error;
  }
};



export const getAllData = async (): Promise<Plane[]> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);

    const data = values
      .map(([key, value]) => value ? JSON.parse(value) : null)
      .filter((item: any) => item !== null) as Plane[];

    return data;
  } catch (error) {
    console.error('Error retrieving all data:', error);
    throw error;
  }
};



export const deleteDataById = async (id: string) => {
  try {
    await AsyncStorage.removeItem(id);
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
