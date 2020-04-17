import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Platform, TouchableNativeFeedback } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const CategoriesScreen = (props) => {

    const onPressHandler = (itemData) => {
        props.navigation.navigate({
            name: 'CategoryMeals',
            params: {
                categoryId: itemData.item.id
            }
        })
    };

    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    const renderGridItem = (itemData) => {
        return (
            <View style={styles.greedItemContainer}>
                <TouchableComponent
                    onPress={() => onPressHandler(itemData)} >
                    <View style={styles.greedItem}>
                        <Text>{itemData.item.title}</Text>
                    </View>
                </TouchableComponent>
            </View >
        );
    };

    props.navigation.setOptions({
        headerTitle: 'Meal Categories'
    })

    return (
        // every FlatList needs key. if the name of the key is
        // key or id then keyExtractor is not need, I just wrote it
        // just not to forget.
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderGridItem} />
    );
}


const styles = StyleSheet.create({
    screen: {
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

export default CategoriesScreen;