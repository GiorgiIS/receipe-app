import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './navigation/MealsNavigator';

class App extends React.Component {
  render() {

    const appContent =
      <NavigationContainer>
        <MealsNavigator></MealsNavigator>
      </NavigationContainer>;

    return appContent;
  }
}

export default App;