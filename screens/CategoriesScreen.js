import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { TouchableOpacity } from 'react-native-gesture-handler';

class CategoriesScreen extends React.Component {
    
    renderGridItem = (itemData) => {
        return (
            <View style={styles.greedItemContainer}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate({ 
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

    render() {
       
        // todo: this code should not be on render
        // it must execute only once
       
        this.props.navigation.setOptions({ 
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
                renderItem={this.renderGridItem} />
        );
    }
}

CategoriesScreen.prototype.navigationOptions = { headerTitle: '123'};

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