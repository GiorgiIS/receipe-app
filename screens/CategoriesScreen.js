import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return (
            <View style={styles.greedItemContainer}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate({
                            name: 'CategoryMeals',
                            params: {
                                categoryId: itemData.item.id
                            }
                        })
                    }}>
                    <View style={styles.greedItem}>
                        <Text>{itemData.item.title}</Text>
                    </View>
                </TouchableOpacity>
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
        height: 150
    },

    greedItemContainer: {
        flex: 1
    }
});

export default CategoriesScreen;