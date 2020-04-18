import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {

    const { categoryId } = props.route.params;

    const selectedCategory = CATEGORIES.find(c => c.id === categoryId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    props.navigation.setOptions({
        headerTitle: selectedCategory.title
    })

    return (
        <MealList
            data={displayedMeals}
            navigation={props.navigation}
        />
    );
}

export default CategoryMealsScreen;