import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import { StyleSheet, View } from 'react-native';

const CategoryMealsScreen = props => {

    const { categoryId } = props.route.params;

    const selectedCategory = CATEGORIES.find(c => c.id === categoryId);

    // useSelector will get slice of data from redux store
    // now it will get filtered meals, not all meals because I want 
    // to respect filters customer applied
    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    props.navigation.setOptions({
        headerTitle: selectedCategory.title
    })

    if (displayedMeals.length === 0) {
        return <View style={styles.content}>
            <DefaultText>No meals found. Check your filters</DefaultText>
        </View>
    }

    return (
        <MealList
            data={displayedMeals}
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

export default CategoryMealsScreen;