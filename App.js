import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './navigation/MealsNavigator';
import {useScreens } from 'react-native-screens';

// This will be effective in larger applications
// This will use default screens for android and ios, that will be a bit faster

useScreens();

export default function App() {

  return(
      <NavigationContainer>
        <MealsNavigator></MealsNavigator>
      </NavigationContainer>
  )
}