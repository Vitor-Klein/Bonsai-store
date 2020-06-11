import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import LottieView from 'lottie-react-native'
import { styles } from './styles';
import { Feather as Icon } from "@expo/vector-icons";


const HomePage: React.FC = () => {
  return <LinearGradient style={styles.container} colors={['#ffffff', "#EA027C"]}>
    <LottieView
          loop={true}
          autoPlay={true}
          autoSize={false}
          source={require("../../assets/japan-scene.json")}
          style={styles.animation}
        />
    <Text style={styles.text}>Your bonsai is your therapy</Text>

    <TouchableOpacity style={styles.button}>
    <Icon name="arrow-right" size={40} color="#000000" />
    </TouchableOpacity>

  </LinearGradient>;
}

export default HomePage;