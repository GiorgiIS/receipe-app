import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = props => {

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
                data={props.data}
                renderItem={renderMealItem}
                style={{ width: '100%' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    greedItem: {
        flex: 1,
        margin: 15,
        padding: 15,
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: 'lightgreen',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10
    },

    greedItemContainer: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: 10
    }
});

export default MealList;