
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constans/Colors';
import FiltersScreen from '../screens/FiltersScreen';

const defaultOptions = {
  headerStyle: { backgroundColor: 'green' }, headerTintColor: '#fff'
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

const MealStack = createStackNavigator();
// there is only one screen in filter stack navigator
// the reason of adding this is to get navigation proporties there
// for example header, where I put menu icon
const FilterStack = createStackNavigator();
const FavStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Menu = createDrawerNavigator();

const MealsNavigator = props => {

  const content =
    <MealStack.Navigator initialRouteName="Categories" >
      <MealStack.Screen name="Categories" component={CategoriesScreen} options={defaultOptions} />
      <MealStack.Screen name="CategoryMeals" component={CategoryMealsScreen} options={defaultOptions} />
      <MealStack.Screen name="MealDetail" component={MealDetailScreen} options={defaultOptions} />
    </MealStack.Navigator>

  return content;
}

const FilterStackNavigator = props => {

  const content =
    <FilterStack.Navigator initialRouteName="Filter" >
      <FilterStack.Screen name="Filter" component={FiltersScreen} options={defaultOptions} />
    </FilterStack.Navigator>

  return content;
}

const FavoritesNavigator = props => {
  const content =
    <FavStack.Navigator initialRouteName="Categories" >
      <FavStack.Screen name="Favorites" component={FavoritesScreen} options={defaultOptions} />
      <FavStack.Screen name="MealDetail" component={MealDetailScreen} options={defaultOptions} />
    </FavStack.Navigator>

  return content;
}

const MealsFavTabNavigator = props => {

  const content =
    <Tab.Navigator
      initialRouteName="Meals"
      activeColor={Colors.accentColor}
      inactiveColor={Colors.primaryColor}
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen name="Meals" component={MealsNavigator} options={mealsTabOptions} />
      <Tab.Screen name="Favorites" component={FavoritesNavigator} options={favTabOptions} />
    </Tab.Navigator>

  return content;
}

const MenuNavigator = props => {

  const content =
    <Menu.Navigator initialRouteName="Meal Categories">
      <Menu.Screen name="Meal Categories" component={MealsFavTabNavigator} />
      <Menu.Screen name="Filter" component={FilterStackNavigator} />
    </Menu.Navigator>

  return content;
}

export default MenuNavigator;


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