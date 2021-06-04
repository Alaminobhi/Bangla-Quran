import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Sura from './components/Sura';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name = "sura" component = {Sura} />
  </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
