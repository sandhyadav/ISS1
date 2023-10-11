import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View,StyleSheet} from "react-native"
import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import issinfo from "./screens/IssInfo"
const Stack = createStackNavigator();

function App() {
  return (
  <View style={styles.container}>
<HomeScreen/>
  </View>
  );
}
const styles=StyleSheet.create({
container:{
   flex: 1,
   justifyContent: "center",
   alignItems: "center"
}
})
export default App;