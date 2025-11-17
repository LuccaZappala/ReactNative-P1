import styles from './styles'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import icon from "./assets/logoPlay.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image}/>
      <StatusBar style="auto" />
      
    </View>
  );
}


