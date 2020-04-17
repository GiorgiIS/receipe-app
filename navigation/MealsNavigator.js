
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constans/Colors';

const defaultOptions = {
  headerStyle: { backgroundColor: 'green' }, headerTintColor: '#fff'
}

// this is navigator of categories meals and details
const Stack = createStackNavigator();

// this is bottom tab navigator, to swich between meals and favorites
// meals is first navigator, fovorites screen of favorite meals
const Tab = createMaterialBottomTabNavigator();

const MealsNavigator = props => {

  const content =
    <Stack.Navigator initialRouteName="Categories" >
      <Stack.Screen name="Categories" component={CategoriesScreen} options={defaultOptions} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} options={defaultOptions} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} options={defaultOptions} />
    </Stack.Navigator>

  return content;
}

const favTabOptions = {
  tabBarIcon: (tabInformation) => {
    return <Ionicons name='ios-star'
      size={25}
      color={tabInformation.color}
    />
  }
}

const mealsTabOptions = {
  tabBarIcon: (tabInformation) => {
    return <Ionicons name='ios-restaurant'
      size={25}
      color={tabInformation.color}
    />
  }
}

const MealsFabTabNavigator = props => {

  const content =
    <Tab.Navigator
      initialRouteName="Meals"
      activeColor={Colors.accentColor}
      inactiveColor={Colors.primaryColor}
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen name="Meals" component={MealsNavigator} options={mealsTabOptions} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={favTabOptions} />
    </Tab.Navigator>

  return content;
}

export default MealsFabTabNavigator;


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