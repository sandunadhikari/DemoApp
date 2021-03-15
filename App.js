import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen';
import ListScreen from './screens/listScreen';
import DetailsScreen from './screens/detailsScreen';
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="DetailList" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;