import React from 'react';
import MealList from '../components/MealList';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';

const FavoritesScreen = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

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