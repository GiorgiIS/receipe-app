import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MealsFavTabNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

// This will be effective in larger applications
// This will use default screens for android and ios, that will be a bit faster

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={(err) => {
          console.log('============')
          console.log(err)
          console.log('============')
        }}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      <MealsFavTabNavigator></MealsFavTabNavigator>
    </NavigationContainer>
  )
}