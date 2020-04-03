import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './navigation/MealsNavigator';

function App() {
  return (
    <NavigationContainer>
      <MealsNavigator></MealsNavigator>
    </NavigationContainer>

  );
}

export default App;