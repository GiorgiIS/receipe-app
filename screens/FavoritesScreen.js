import React from 'react';
import MealList from '../components/MealList';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

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

    if (!favoriteMeals || favoriteMeals.length === 0) {
        return <View style={styles.content}>
            <DefaultText>
                No favorite meals found. Start adding some!
            </DefaultText>
        </View>
    }

    return (
        <MealList
            data={favoriteMeals}
            navigation={props.navigation}
        />
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;