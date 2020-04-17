import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MealsFabTabNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';

// This will be effective in larger applications
// This will use default screens for android and ios, that will be a bit faster

enableScreens();

export default function App() {

  return (
    <NavigationContainer>
      <MealsFabTabNavigator></MealsFabTabNavigator>
    </NavigationContainer>
  )
}