import React from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const FavoritesScreen = props => {

    const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    props.navigation.setOptions({
        headerTitle: 'Favorites',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Menu'
                    iconName='ios-menu' // can be any icon from @expo/vector-icons
                    onPress={() => {
                        props.navigation.toggleDrawer();;
                    }}
                />
            </HeaderButtons>
        )
    })

    return (
        <MealList
            data={favoriteMeals}
            navigation={props.navigation}
        />
    );
}


export default FavoritesScreen;