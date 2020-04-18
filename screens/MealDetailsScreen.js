import React, { useEffect } from 'react';
import {
    ScrollView,
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/mealsAction';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailScreen = props => {

    const { mealId } = props.route.params;
    const allMeals = useSelector(state => state.meals.allMeals);
    const isFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));
    const selectedMeal = allMeals.find(meal => meal.id === mealId);

    // dispatch hook, that is simple used to dispatch action 
    const dispatch = useDispatch();

    const toggleFavoriteHandler = () => {
        dispatch(toggleFavorite(mealId));
    }

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: selectedMeal.title,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title='Favorite'
                        iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} // can be any icon from @expo/vector-icons
                        onPress={() => toggleFavoriteHandler()}
                    />
                </HeaderButtons>
            )
        });
    }, [props.navigation, selectedMeal.mealId, isFavorite]);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
            ))}
        </ScrollView>
    );
};


const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 200
    },

    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },

    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;
