import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = props => {

    const { mealId } = props.route.params;
    const selectedMeal = MEALS.find(c => c.id === mealId);

    props.navigation.setOptions({
        headerTitle: selectedMeal.title
    })

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
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

export default MealDetailsScreen;