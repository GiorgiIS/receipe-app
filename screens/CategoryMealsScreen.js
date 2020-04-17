import React from 'react';
import { View, Text, StyleSheet, Button, ClippingRectangle } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const { categoryId } = props.route.params;
    const selectedCategory = CATEGORIES.find(c => c.id === categoryId);
   
    props.navigation.setOptions({ 
        headerTitle: selectedCategory.title
    })
   
    return (
        <View style={styles.screen}>
            <Text>The CategoryMealsScreen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button
                title='Go to meal details'
                onPress={() => { props.navigation.navigate('MealDetail') }} />
                <Button
                title='Go Back'
                onPress={() => { props.navigation.pop() }} />
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