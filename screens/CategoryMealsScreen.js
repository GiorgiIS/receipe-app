import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

    const { categoryId } = props.route.params;

    const selectedCategory = CATEGORIES.find(c => c.id === categoryId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    props.navigation.setOptions({
        headerTitle: selectedCategory.title
    })

    const onSelectMealHandler = (mealId) => {
        props.navigation.navigate({
            name: 'MealDetail',
            params: {
                mealId: mealId
            }
        })
    };

    const renderMealItem = itemData => {
        return (
            <MealItem item={itemData.item}
                onSelectMeal={() => onSelectMealHandler(itemData.item.id)}>
            </MealItem>
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={displayedMeals}
                renderItem={renderMealItem}
                style={{ width: '100%' }} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;