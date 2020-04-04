
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

export default MealsNavigator;


//   Here is some useful information about navigation methods.

//   1. navigate will not always navigate you to another screen
//      e.x. if you are already in that scree, but push will always.
//      onPress={() => { props.navigation.push('CategoryMeals') }}
//   2. goBack() and pop(). Navigation has also functions goBack and pop, back will 
//      get you in previous scree, and pop will pop current screem
//      that means you will get in previous screen. Difference is that
//      pop can only be used in stack navigator, goBack works in every navigation      
//   3. popToTop() takes you to the root screen
//   4. replace() replaces current screen with another, that means stack is empty and
//      goBack can't be used. e.x. This will be usefull when user logs in

// Test button that was implemented in CategoriesScreen

// <Button
//title='Go to CategoryMeals'
//onPress={() => { props.navigation.navigate('CategoryMeals') }}/>