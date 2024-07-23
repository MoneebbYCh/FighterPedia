import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from '../styles';

const Drawer = ({ title, children }) => {
    const [expanded, setExpanded] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;
  
    const toggleDrawer = () => {
      setExpanded(!expanded);
      Animated.timing(animation, {
        toValue: expanded ? 0 : 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };
  
    const heightInterpolation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 220], 
    });
  
    return (
      <View style={styles.drawerContainer}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.drawerButton}>
          <Text style={styles.drawerButtonText}>{title}</Text>
        </TouchableOpacity>
        <Animated.View style={[styles.drawerContent, { height: heightInterpolation }]}>
          {children}
        </Animated.View>
      </View>
    );
  };

  export default Drawer;