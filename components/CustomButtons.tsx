import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import styles from '../styles';

function CustomButton ({ title, onPress, buttonStyle, textStyle }) {
    return (
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  export default CustomButton;